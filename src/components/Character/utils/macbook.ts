import * as THREE from "three";

/**
 * Creates a detailed 3D MacBook Pro model:
 * - Space Gray unibody aluminum chassis
 * - Centered backlit chiclet keyboard deck aligned under typing fingers
 * - Smooth glass trackpad with fine border
 * - Display lid open at an ergonomic ~106° angle
 * - Iconic radiant glowing Apple logo on the back of the lid facing viewer
 * - Dark VS Code React/TypeScript IDE on the inside screen facing the character
 */
export function createMacBook(): THREE.Group {
  const macbook = new THREE.Group();
  macbook.name = "macbook";

  // Space Gray metallic aluminum
  const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: 0x24272c,
    metalness: 0.85,
    roughness: 0.35,
  });

  const darkMetalMaterial = new THREE.MeshStandardMaterial({
    color: 0x121418,
    metalness: 0.9,
    roughness: 0.5,
  });

  // 1. BASE (Lower Unibody Chassis)
  const baseMesh = new THREE.Mesh(
    new THREE.BoxGeometry(3.8, 0.08, 2.5),
    aluminumMaterial
  );
  baseMesh.position.y = 0.04;
  macbook.add(baseMesh);

  // Recessed keyboard well
  const keyboardWell = new THREE.Mesh(
    new THREE.BoxGeometry(3.35, 0.02, 1.4),
    darkMetalMaterial
  );
  keyboardWell.position.set(0, 0.081, -0.05);
  macbook.add(keyboardWell);

  // Backlit keyboard surface with detailed chiclet keys
  const kbCanvas = document.createElement("canvas");
  kbCanvas.width = 1024;
  kbCanvas.height = 420;
  const kbCtx = kbCanvas.getContext("2d");
  if (kbCtx) {
    kbCtx.fillStyle = "#0c0e12";
    kbCtx.fillRect(0, 0, 1024, 420);

    // Subtle soft backlit key glow
    kbCtx.fillStyle = "#181b22";
    kbCtx.strokeStyle = "#2e3442";
    kbCtx.lineWidth = 1.5;

    const rows = 5;
    const cols = 14;
    const kw = 64;
    const kh = 68;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 32 + c * 69;
        const y = 20 + r * 76;
        kbCtx.fillRect(x, y, kw, kh);
        kbCtx.strokeRect(x, y, kw, kh);
      }
    }
    // Space bar
    kbCtx.fillRect(280, 328, 440, kh);
    kbCtx.strokeRect(280, 328, 440, kh);
  }
  const kbTexture = new THREE.CanvasTexture(kbCanvas);
  kbTexture.generateMipmaps = false;
  kbTexture.minFilter = THREE.LinearFilter;
  const kbMaterial = new THREE.MeshStandardMaterial({
    map: kbTexture,
    roughness: 0.7,
    metalness: 0.3,
  });
  const kbSurface = new THREE.Mesh(
    new THREE.PlaneGeometry(3.3, 1.35),
    kbMaterial
  );
  kbSurface.rotation.x = -Math.PI / 2;
  kbSurface.position.set(0, 0.082, -0.05);
  macbook.add(kbSurface);

  // Glass Trackpad
  const trackpadMaterial = new THREE.MeshStandardMaterial({
    color: 0x272a31,
    metalness: 0.55,
    roughness: 0.22,
  });
  const trackpad = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 0.75),
    trackpadMaterial
  );
  trackpad.rotation.x = -Math.PI / 2;
  trackpad.position.set(0, 0.082, -0.80);
  macbook.add(trackpad);

  // 2. HINGE BAR
  const hinge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 3.4, 16),
    darkMetalMaterial
  );
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, 0.075, 1.15);
  macbook.add(hinge);

  // 3. DISPLAY LID (Pivot at hinge)
  const lidGroup = new THREE.Group();
  lidGroup.name = "macbookLid";
  lidGroup.position.set(0, 0.075, 1.15);
  // Tilted back ~16 degrees from upright (106 degrees open)
  lidGroup.rotation.x = 0.28;
  macbook.add(lidGroup);

  // Display outer shell (Aluminium back)
  const lidMesh = new THREE.Mesh(
    new THREE.BoxGeometry(3.8, 2.35, 0.05),
    aluminumMaterial
  );
  lidMesh.position.set(0, 1.18, 0);
  lidGroup.add(lidMesh);

  // 4. GLOWING APPLE LOGO (Back of lid, facing outward / camera)
  const logoCanvas = document.createElement("canvas");
  logoCanvas.width = 512;
  logoCanvas.height = 512;
  const logoCtx = logoCanvas.getContext("2d");
  if (logoCtx) {
    logoCtx.clearRect(0, 0, 512, 512);

    // Radiant bloom glow background
    const radial = logoCtx.createRadialGradient(256, 260, 30, 256, 260, 240);
    radial.addColorStop(0, "rgba(255, 255, 255, 0.95)");
    radial.addColorStop(0.2, "rgba(235, 245, 255, 0.85)");
    radial.addColorStop(0.5, "rgba(200, 225, 255, 0.35)");
    radial.addColorStop(0.8, "rgba(180, 215, 255, 0.12)");
    radial.addColorStop(1, "rgba(180, 215, 255, 0)");
    logoCtx.fillStyle = radial;
    logoCtx.fillRect(0, 0, 512, 512);

    // Iconic Apple vector silhouette
    const applePath = new Path2D(
      "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.95 2.82 1.02.08 2.06-.51 2.68-1.26z"
    );
    logoCtx.save();
    logoCtx.translate(76, 50);
    logoCtx.scale(15, 15);
    logoCtx.fillStyle = "#ffffff";
    logoCtx.shadowColor = "#ffffff";
    logoCtx.shadowBlur = 24;
    logoCtx.fill(applePath);
    logoCtx.restore();
  }
  const logoTexture = new THREE.CanvasTexture(logoCanvas);
  logoTexture.generateMipmaps = false;
  logoTexture.minFilter = THREE.LinearFilter;
  const logoMaterial = new THREE.MeshBasicMaterial({
    map: logoTexture,
    transparent: true,
    toneMapped: false,
    side: THREE.FrontSide,
  });
  const logoMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.75),
    logoMaterial
  );
  // Facing +Z (outward from back of lid)
  logoMesh.position.set(0, 1.18, 0.026);
  lidGroup.add(logoMesh);

  // 5. SCREEN DISPLAY (Inside of lid, facing character)
  const bezelMaterial = new THREE.MeshStandardMaterial({
    color: 0x07080a,
    roughness: 0.9,
  });
  const bezel = new THREE.Mesh(
    new THREE.PlaneGeometry(3.75, 2.3),
    bezelMaterial
  );
  bezel.position.set(0, 1.18, -0.026);
  bezel.rotation.y = Math.PI;
  lidGroup.add(bezel);

  // Code editor display texture
  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = 1024;
  screenCanvas.height = 640;
  const sCtx = screenCanvas.getContext("2d");
  if (sCtx) {
    sCtx.fillStyle = "#18191f";
    sCtx.fillRect(0, 0, 1024, 640);

    // macOS window title bar
    sCtx.fillStyle = "#111216";
    sCtx.fillRect(0, 0, 1024, 52);

    sCtx.fillStyle = "#ff5f56";
    sCtx.beginPath();
    sCtx.arc(36, 26, 8, 0, Math.PI * 2);
    sCtx.fill();

    sCtx.fillStyle = "#ffbd2e";
    sCtx.beginPath();
    sCtx.arc(64, 26, 8, 0, Math.PI * 2);
    sCtx.fill();

    sCtx.fillStyle = "#27c93f";
    sCtx.beginPath();
    sCtx.arc(92, 26, 8, 0, Math.PI * 2);
    sCtx.fill();

    // Editor tab
    sCtx.fillStyle = "#222530";
    sCtx.fillRect(140, 10, 240, 42);
    sCtx.fillStyle = "#a8b5d1";
    sCtx.font = "20px 'Fira Code', monospace";
    sCtx.fillText("Battulga.tsx", 180, 36);

    // Code lines
    sCtx.font = "24px 'Fira Code', monospace";
    const lines = [
      { num: "01", text: "import { FrontEndDev } from 'battulga';", color: "#c586c0" },
      { num: "02", text: "", color: "" },
      { num: "03", text: "export const Portfolio = () => {", color: "#4ec9b0" },
      { num: "04", text: "  const name = 'Battulga Gerelt-Od';", color: "#9cdcfe" },
      { num: "05", text: "  const focus = ['React', 'TypeScript', 'Automation'];", color: "#ce9178" },
      { num: "06", text: "  const style = 'Minimalist & Modern';", color: "#dcdcaa" },
      { num: "07", text: "", color: "" },
      { num: "08", text: "  return (", color: "#c586c0" },
      { num: "09", text: "    <FrontEndDev modern={true} minimalist={true}>", color: "#4ec9b0" },
      { num: "10", text: "      <CleanInterfaces />", color: "#9cdcfe" },
      { num: "11", text: "      <SmoothAnimations />", color: "#9cdcfe" },
      { num: "12", text: "    </FrontEndDev>", color: "#4ec9b0" },
      { num: "13", text: "  );", color: "#c586c0" },
      { num: "14", text: "};", color: "#dcdcaa" },
    ];
    lines.forEach((l, i) => {
      sCtx.fillStyle = "#495162";
      sCtx.fillText(l.num, 30, 96 + i * 36);
      sCtx.fillStyle = l.color || "#cccccc";
      sCtx.fillText(l.text, 85, 96 + i * 36);
    });

    // Blinking cursor
    sCtx.fillStyle = "#c7a9ff";
    sCtx.fillRect(470, 480, 14, 28);

    // Status bar
    sCtx.fillStyle = "#007acc";
    sCtx.fillRect(0, 608, 1024, 32);
    sCtx.fillStyle = "#ffffff";
    sCtx.font = "16px sans-serif";
    sCtx.fillText("TypeScript React • UTF-8 • Battulga", 24, 630);
  }

  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.generateMipmaps = false;
  screenTexture.minFilter = THREE.LinearFilter;
  const screenMaterial = new THREE.MeshStandardMaterial({
    map: screenTexture,
    emissive: new THREE.Color(0xc7a9ff),
    emissiveMap: screenTexture,
    emissiveIntensity: 0.6,
    roughness: 0.3,
  });

  const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 2.15),
    screenMaterial
  );
  screenMesh.name = "macbookScreen";
  screenMesh.position.set(0, 1.18, -0.027);
  screenMesh.rotation.y = Math.PI;
  lidGroup.add(screenMesh);

  return macbook;
}
