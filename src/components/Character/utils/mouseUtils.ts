import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  if (event.touches.length > 0) {
    const touch = event.touches[0];
    // On mobile touch, reduce movement range and scale so finger scrolling doesn't violently whip the head
    const mouseX = ((touch.clientX / window.innerWidth) * 2 - 1) * 0.45;
    const mouseY = (-(touch.clientY / window.innerHeight) * 2 + 1) * 0.35;
    setMousePosition(mouseX, mouseY);
  }
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  // Smoothly relax head back toward center after touch release
  setMousePosition(0, 0, 0.035, 0.035);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    // On mobile screens, use gentler lerping factors to prevent high-frequency jitter
    const effectiveInterpolationY = isMobile ? 0.04 : interpolationY;
    const effectiveInterpolationX = isMobile ? 0.03 : interpolationX;

    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotation,
      effectiveInterpolationY
    );
    let minRotationX = -0.3;
    let maxRotationX = 0.4;
    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -mouseY - 0.5 * maxRotation,
          effectiveInterpolationX
        );
      } else {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -maxRotation - 0.5 * maxRotation,
          effectiveInterpolationX
        );
      }
    } else {
      headBone.rotation.x = lerp(
        headBone.rotation.x,
        -minRotationX - 0.5 * maxRotation,
        effectiveInterpolationX
      );
    }
  } else {
    // Look down directly at the MacBook screen & keyboard
    headBone.rotation.x = lerp(headBone.rotation.x, 0.28, 0.04);
    headBone.rotation.y = lerp(headBone.rotation.y, -0.06, 0.04);
  }
};
