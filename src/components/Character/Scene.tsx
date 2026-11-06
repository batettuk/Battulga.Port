import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize, { updateResponsiveCamera } from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  const [, setChar] = useState<THREE.Object3D | null>(null);
  useEffect(() => {
    if (canvasDiv.current) {
      let isMounted = true;
      let animationFrameId: number;
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = new THREE.Scene();

      const isMobile =
        window.innerWidth <= 768 ||
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        ("ontouchstart" in window && window.innerWidth <= 1024);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile && window.devicePixelRatio < 2,
        powerPreference: isMobile ? "default" : "high-performance",
        precision: isMobile ? "mediump" : "highp",
        stencil: false,
        depth: true,
      });

      // On high-DPI mobile screens, cap DPR to 1.2 to eliminate fill-rate bottleneck
      // (60%+ fragment shader reduction while preserving crisp Retina visuals)
      const maxDPR = isMobile ? 1.2 : 1.75;
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDPR));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;

      // Clean up any stale canvas before appending
      canvasDiv.current.querySelectorAll("canvas").forEach((c) => c.remove());
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      updateResponsiveCamera(
        camera,
        container.width || window.innerWidth,
        container.height || window.innerHeight
      );

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      let resizeHandler: (() => void) | null = null;

      loadCharacter().then((gltf) => {
        if (!isMounted || !gltf) return;

        // Ensure no duplicate models exist in the scene
        scene.children = scene.children.filter(
          (child) => child.type === "DirectionalLight" || child.type === "PointLight"
        );

        const animations = setAnimations(gltf);
        hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
        mixer = animations.mixer;
        let charObj = gltf.scene;
        (window as any).__character = charObj;
        (window as any).__scene = scene;
        (window as any).__camera = camera;
        setChar(charObj);
        scene.add(charObj);
        headBone = charObj.getObjectByName("spine006") || null;
        screenLight = charObj.getObjectByName("screenlight") || null;
        progress.loaded().then(() => {
          setTimeout(() => {
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        });
        resizeHandler = () => handleResize(renderer, camera, canvasDiv, charObj);
        window.addEventListener("resize", resizeHandler);
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      const onTouchMove = (event: TouchEvent) => {
        handleTouchMove(event, (x, y) => (mouse = { x, y }));
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });

      let lastTime = 0;
      let frameCount = 0;
      const targetFrameInterval = isMobile ? 1000 / 60 : 0; // Solid 60fps cadence on 120Hz mobile screens

      const animate = (currentTime: number = 0) => {
        animationFrameId = requestAnimationFrame(animate);

        // Frame rate limiter for mobile: keeps steady 60fps cadence on 120Hz ProMotion screens
        if (isMobile && targetFrameInterval > 0) {
          const elapsed = currentTime - lastTime;
          if (elapsed < targetFrameInterval - 1) {
            return;
          }
          lastTime = currentTime - (elapsed % targetFrameInterval);
        }

        // Offscreen occlusion culling: When scrolled past What I Do, character is completely offscreen
        const isVisible = window.scrollY < window.innerHeight * 3.3;
        if (!isVisible) {
          return;
        }

        frameCount++;
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          // Only update pointLight position every 4th frame to eliminate expensive matrix traversals
          if (frameCount % 4 === 0) {
            light.setPointLight(screenLight);
          }
        }
        const delta = Math.min(clock.getDelta(), 0.1);
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate(0);
      return () => {
        isMounted = false;
        cancelAnimationFrame(animationFrameId);
        scene.clear();
        renderer.dispose();
        if (resizeHandler) {
          window.removeEventListener("resize", resizeHandler);
        }
        if (canvasDiv.current && renderer.domElement.parentElement === canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
