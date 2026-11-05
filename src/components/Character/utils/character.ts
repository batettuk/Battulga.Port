import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";
import { createMacBook } from "./macbook";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = false;
                child.receiveShadow = false;
                mesh.frustumCulled = true;
                if (mesh.material && !Array.isArray(mesh.material)) {
                  (mesh.material as THREE.ShaderMaterial).precision = 'mediump';
                }
              }
            });

            // Hide old iMac monitor, stand, and external mechanical keyboard
            const keyboard = character.getObjectByName("Keyboard");
            if (keyboard) keyboard.visible = false;

            const oldMonitor =
              character.getObjectByName("Plane.004") ||
              character.getObjectByName("Plane004");
            if (oldMonitor) oldMonitor.visible = false;

            const oldStand =
              character.getObjectByName("Cube.002") ||
              character.getObjectByName("Cube002");
            if (oldStand) oldStand.visible = false;

            // Add sleek MacBook Pro with glowing Apple logo
            const macbook = createMacBook();
            // Position keyboard deck right under typing fingers
            macbook.position.set(0.08, 9.04, 3.48);
            character.add(macbook);

            // Flowing volumetric screen light from the MacBook display screen
            const screenlight = character.getObjectByName("screenlight") as THREE.Mesh;
            if (screenlight) {
              const lidGroup = macbook.getObjectByName("macbookLid");
              if (lidGroup) {
                lidGroup.add(screenlight);
                screenlight.scale.set(0.72, 0.784, 1.25);
                screenlight.position.set(0, -0.853, 0.264);
                screenlight.rotation.set(0, 0, 0);
                screenlight.visible = true;
                screenlight.castShadow = false;
                screenlight.receiveShadow = false;
                if (screenlight.material) {
                  (screenlight.material as THREE.Material).depthWrite = false;
                }
              }
            }

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
