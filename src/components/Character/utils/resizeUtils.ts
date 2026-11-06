import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export function updateResponsiveCamera(
  camera: THREE.PerspectiveCamera,
  width: number,
  height: number
) {
  const aspect = width / height;
  camera.aspect = aspect;
  if (aspect < 0.6) {
    // Mobile phones portrait (e.g. 390x844, 414x896, 430x932)
    camera.zoom = 0.72;
    camera.position.set(0, 13.2, 25.5);
  } else if (aspect < 1.0) {
    // Tablets portrait (e.g. 768x1024, 820x1180)
    camera.zoom = 0.70;
    camera.position.set(0, 13.0, 25.4);
  } else if (aspect < 1.35) {
    // Small laptops / landscape tablets
    camera.zoom = 1.0;
    camera.position.set(0, 13.1, 24.7);
  } else {
    // Desktop
    camera.zoom = 1.1;
    camera.position.set(0, 13.1, 24.7);
  }
  camera.updateProjectionMatrix();
}

let lastWidth = typeof window !== "undefined" ? window.innerWidth : 1440;
let lastHeight = typeof window !== "undefined" ? window.innerHeight : 900;

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  // On mobile browsers, the address bar slides in/out during scrolling, changing innerHeight.
  // Rebuilding all GSAP ScrollTriggers mid-scroll causes severe stutters and frame drops.
  const isWidthSame = Math.abs(currentWidth - lastWidth) < 4;
  const isAddressBarToggle = isWidthSame && Math.abs(currentHeight - lastHeight) < 150;

  if (isAddressBarToggle) {
    return;
  }

  lastWidth = currentWidth;
  lastHeight = currentHeight;

  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width || currentWidth;
  const height = canvas3d.height || currentHeight;
  renderer.setSize(width, height);
  updateResponsiveCamera(camera, width, height);

  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
