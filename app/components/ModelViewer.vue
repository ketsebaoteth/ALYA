<template>
  <!-- INFO: The 3D Model Viewer no human is advised to know/see what's inside -->
  <div
    ref="container"
    :style="{
      position: 'relative',
      touchAction: 'pan-y pinch-zoom',
    }"
    :class="props.class"
  >
    <!-- <button -->
    <!--   style="position: absolute; top: 10px; right: 10px; z-index: 10" -->
    <!--   @click="capture" -->
    <!-- > -->
    <!--   Screenshot -->
    <!-- </button> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const props = defineProps({
  url: {
    type: String,
    default:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",
  },
  // width: { type: String, default: "400px" },
  // height: { type: String, default: "400px" },

  class: { type: String, default: "" },
  defaultRotationX: { type: Number, default: -50 },
  defaultRotationY: { type: Number, default: 20 },

  defaultZoom: { type: Number, default: 2 },
  minZoomDistance: { type: Number, default: 0.5 },
  maxZoomDistance: { type: Number, default: 10 },

  enableMouseParallax: { type: Boolean, default: true },
  enableManualRotation: { type: Boolean, default: true },
  enableHoverRotation: { type: Boolean, default: true },
  enableManualZoom: { type: Boolean, default: true },

  autoRotate: { type: Boolean, default: true },
  autoRotateSpeed: { type: Number, default: 0.04 },

  fadeIn: { type: Boolean, default: true },
});

const container = ref();

let scene, camera, renderer, outer, inner, model;
const clock = new THREE.Clock();
// const clock = new THREE.Timer();

// === STATE (ported from React) ===
const vel = { x: 0, y: 0 };
const tPar = { x: 0, y: 0 };
const cPar = { x: 0, y: 0 };
const tHov = { x: 0, y: 0 };
const cHov = { x: 0, y: 0 };

const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = (Math.PI / 180) * 6;
const HOVER_EASE = 0.15;

let needsRender = true;
function invalidate() {
  needsRender = true;
}

// === INIT ===
onMounted(() => {
  scene = new THREE.Scene();
  outer = new THREE.Group();
  inner = new THREE.Group();
  scene.add(outer);
  outer.add(inner);

  camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.z = props.defaultZoom;

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
    // alpha: true,
  });
  resize();
  container.value.appendChild(renderer.domElement);

  // lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));

  const d1 = new THREE.DirectionalLight(0xffffff, 1);
  d1.position.set(5, 5, 5);
  scene.add(d1);

  const d2 = new THREE.DirectionalLight(0xffffff, 0.5);
  d2.position.set(-5, 2, 5);
  scene.add(d2);

  const d3 = new THREE.DirectionalLight(0xffffff, 0.8);
  d3.position.set(0, 4, -5);
  scene.add(d3);
  scene.background = null;

  loadModel();

  setupMouse();
  setupTouch();
  setupParallax();

  window.addEventListener("resize", resize);

  animate();
});

const loader = new GLTFLoader();
const pivot = new THREE.Vector3();
const pivotW = new THREE.Vector3();
// === LOAD MODEL ===
function loadModel() {
  loader.load(props.url, (gltf) => {
    model = gltf.scene;

    // normalize
    const box = new THREE.Box3().setFromObject(model);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const scale = 1 / (sphere.radius * 2);

    model.scale.setScalar(scale * 2);
    model.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);

    model.rotation.x = (props.defaultRotationX * Math.PI) / 180;
    model.rotation.y = (props.defaultRotationY * Math.PI) / 180;

    // fade-in
    if (props.fadeIn) {
      model.traverse((o) => {
        if (o.isMesh) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      });

      let t = 0;
      const fade = setInterval(() => {
        t += 0.05;
        model.traverse((o) => {
          if (o.isMesh) o.material.opacity = Math.min(t, 1);
        });
        invalidate();
        if (t >= 1) clearInterval(fade);
      }, 16);
    }

    inner.add(model);
    // === PIVOT CALC (ADD THIS HERE) ===

    inner.updateWorldMatrix(true, true);
    inner.getWorldPosition(pivotW);
    pivot.copy(pivotW);
    invalidate();
  });
}

// === MOUSE ROTATION ===
function setupMouse() {
  let dragging = false,
    lx = 0,
    ly = 0;

  renderer.domElement.addEventListener("pointerdown", (e) => {
    dragging = true;
    lx = e.clientX;
    ly = e.clientY;
  });

  window.addEventListener("pointerup", () => (dragging = false));

  window.addEventListener("pointermove", (e) => {
    if (!dragging || !props.enableManualRotation) return;

    const dx = e.clientX - lx;
    const dy = e.clientY - ly;

    outer.rotation.y += dx * ROTATE_SPEED;
    outer.rotation.x += dy * ROTATE_SPEED;

    vel.x = dx * ROTATE_SPEED;
    vel.y = dy * ROTATE_SPEED;

    lx = e.clientX;
    ly = e.clientY;

    invalidate();
  });

  renderer.domElement.addEventListener("wheel", (e) => {
    if (!props.enableManualZoom) return;
    camera.position.z += e.deltaY * 0.001;
    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      props.minZoomDistance,
      props.maxZoomDistance
    );
    invalidate();
  });
  // renderer.domElement.style.background = "transparent";
  renderer.setClearColor(0xff00ff, 0);
}

// === TOUCH (DECIDE LOGIC) ===
function setupTouch() {
  const pts = new Map();
  let mode = "idle";
  let sx = 0,
    sy = 0,
    lx = 0,
    ly = 0,
    startDist = 0,
    startZ = 0;

  const DECIDE = 8;

  container.value.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch") return;

    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pts.size === 1) {
      mode = "decide";
      sx = lx = e.clientX;
      sy = ly = e.clientY;
    } else if (pts.size === 2) {
      mode = "pinch";
      const [p1, p2] = [...pts.values()];
      startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      startZ = camera.position.z;
    }
  });

  window.addEventListener("pointermove", (e) => {
    const p = pts.get(e.pointerId);
    if (!p) return;

    p.x = e.clientX;
    p.y = e.clientY;

    if (mode === "decide") {
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;

      if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
        mode = Math.abs(dx) > Math.abs(dy) ? "rotate" : "idle";
      }
    }

    if (mode === "rotate") {
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;

      // model.rotation.y += dx * ROTATE_SPEED;
      // model.rotation.x += dy * ROTATE_SPEED;
      outer.rotation.y += dx * ROTATE_SPEED;
      outer.rotation.x += dy * ROTATE_SPEED;

      vel.x = dx * ROTATE_SPEED;
      vel.y = dy * ROTATE_SPEED;

      lx = e.clientX;
      ly = e.clientY;

      invalidate();
    }

    if (mode === "pinch" && pts.size === 2) {
      const [p1, p2] = [...pts.values()];
      const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      const ratio = startDist / d;

      camera.position.z = THREE.MathUtils.clamp(
        startZ * ratio,
        props.minZoomDistance,
        props.maxZoomDistance
      );

      invalidate();
    }
  });

  window.addEventListener("pointerup", (e) => {
    pts.delete(e.pointerId);
    if (pts.size === 0) mode = "idle";
  });
}

// === PARALLAX + HOVER ===
function setupParallax() {
  window.addEventListener("pointermove", (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;

    if (props.enableMouseParallax) {
      tPar.x = -nx * PARALLAX_MAG;
      tPar.y = -ny * PARALLAX_MAG;
    }

    if (props.enableHoverRotation) {
      tHov.x = ny * HOVER_MAG;
      tHov.y = nx * HOVER_MAG;
    }

    invalidate();
  });
}

// === LOOP ===
function animate() {
  requestAnimationFrame(animate);
  if (!needsRender && model) return;

  const dt = clock.getDelta();
  let need = false;

  // === PARALLAX SMOOTH ===
  cPar.x += (tPar.x - cPar.x) * PARALLAX_EASE;
  cPar.y += (tPar.y - cPar.y) * PARALLAX_EASE;

  // === HOVER DELTA (CRITICAL) ===
  const phx = cHov.x;
  const phy = cHov.y;

  cHov.x += (tHov.x - cHov.x) * HOVER_EASE;
  cHov.y += (tHov.y - cHov.y) * HOVER_EASE;

  // === PROJECT → OFFSET → UNPROJECT (CRITICAL) ===
  const ndc = pivotW.clone().project(camera);

  ndc.x += cPar.x;
  ndc.y += cPar.y;

  outer.position.copy(ndc.unproject(camera));

  // === APPLY HOVER AS DELTA (NOT ABSOLUTE) ===
  outer.rotation.x += cHov.x - phx;
  outer.rotation.y += cHov.y - phy;

  // === AUTO ROTATE ===
  if (props.autoRotate) {
    outer.rotation.y += props.autoRotateSpeed * dt;
    need = true;
  }

  // === INERTIA (ORDER MATTERS) ===
  outer.rotation.y += vel.x;
  outer.rotation.x += vel.y;

  vel.x *= INERTIA;
  vel.y *= INERTIA;

  if (Math.abs(vel.x) > 1e-4 || Math.abs(vel.y) > 1e-4) {
    need = true;
  }

  // === CHANGE DETECTION ===
  if (
    Math.abs(cPar.x - tPar.x) > 1e-4 ||
    Math.abs(cPar.y - tPar.y) > 1e-4 ||
    Math.abs(cHov.x - tHov.x) > 1e-4 ||
    Math.abs(cHov.y - tHov.y) > 1e-4
  ) {
    need = true;
  }

  renderer.render(scene, camera);

  needsRender = need;
}

// === SCREENSHOT ===
// function capture() {
//   const url = renderer.domElement.toDataURL("image/png");
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "model.png";
//   a.click();
// }

// === RESIZE ===
function resize() {
  if (!container.value) return;
  const w = container.value.clientWidth;
  const h = container.value.clientHeight;

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  invalidate();
}

// === CLEANUP ===
onBeforeUnmount(() => {
  renderer?.dispose();
});
</script>
