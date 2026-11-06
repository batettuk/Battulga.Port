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

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width || window.innerWidth;
  const height = canvas3d.height || window.innerHeight;
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
