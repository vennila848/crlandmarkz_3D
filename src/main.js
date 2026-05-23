// ===============================
// main.js
// ===============================

import './style.css'

import * as THREE from 'three'
import gsap from 'gsap'

import { GLTFLoader }
from 'three/examples/jsm/loaders/GLTFLoader.js'

// ======================================
// APP
// ======================================

const app =
  document.querySelector('#app')

app.innerHTML = `

<div id="progress"></div>

<div id="noise"></div>

<div id="cursor"></div>
<div id="cursor-ring"></div>

<canvas id="three-canvas"></canvas>

<!-- ===================================== -->
<!-- NAVBAR -->
<!-- ===================================== -->

<nav id="nav">

  <div class="logo">
    CR<span>Landmarkz</span>
  </div>

  <ul class="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#about-section">About</a></li>
    <li><a href="#projects-section">Projects</a></li>
    <li><a href="#view3d-section">3D View</a></li>
    <li><a href="#final-section">Contact</a></li>
  </ul>

</nav>

<!-- ===================================== -->
<!-- HERO -->
<!-- ===================================== -->

<section id="hero">

  <p id="hero-eyebrow">
    Est. 2004 — Real Estate & Construction
  </p>

  <h1 id="hero-title">
    CR<span>Landmarkz</span>
  </h1>

  <p id="hero-sub">
    Building Tomorrow, One Landmark at a Time
  </p>

  <div id="scroll-hint">
    <div class="line"></div>
    Scroll to Explore
  </div>

</section>

<!-- ===================================== -->
<!-- ABOUT -->
<!-- ===================================== -->

<section id="about-section">

  <div class="sec-header">

    <h2>About CR Landmarkz</h2>

    <p>
      CR Landmarkz develops modern residential,
      commercial, and township projects with
      world-class architecture and sustainable design.
    </p>

  </div>

</section>

<!-- ===================================== -->
<!-- PROJECTS -->
<!-- ===================================== -->

<section id="projects-section">

 
<section id="projects-section">

  <div class="sec-header">

    <h2>Featured Projects</h2>

    <p>
      Every landmark reflects innovation,
      luxury, and timeless architecture.
    </p>

  </div>

  <!-- PROJECTS GRID -->

  <div class="projects-grid">

    <!-- PROJECT 1 -->

    <div class="project-card">

      <span class="floor-no">
        Luxury Villa
      </span>

      <h3>
        Modern Luxury Villa
      </h3>

      

      <span class="tag">
        Luxury Living
      </span>

    </div>

    <!-- PROJECT 2 -->

    <div class="project-card">

      <span class="floor-no">
        Minimal Architecture
      </span>

      <h3>
        Contemporary Minimal House
      </h3>

     

      <span class="tag">
        Modern Design
      </span>

    </div>

    <!-- PROJECT 3 -->

    <div class="project-card">

      <span class="floor-no">
        Eco Smart Home
      </span>

      <h3>
        Smart Eco-Friendly House
      </h3>

     

      <span class="tag">
        Sustainable Future
      </span>

    </div>

  </div>

</section>

<!-- ===================================== -->
<!-- 3D VIEW -->
<!-- ===================================== -->

<section id="view3d-section">

  <div class="sec-header">

    <h2>3D Experience</h2>

    <p>
      Interactive futuristic 3D environment
      powered by Three.js and GLB models.
    </p>

  </div>

</section>

<!-- ===================================== -->
<!-- FINAL -->
<!-- ===================================== -->

<section id="final-section">

  <h2>
    We Don't Just <em>Build.</em><br>
    We Create Landmarks.
  </h2>

  <p class="tagline">
    20 years of innovation.
    Thousands of dreams delivered.
  </p>

  <a href="#" class="cta-btn">
    Start Your Project →
  </a>

</section>

<!-- ===================================== -->
<!-- STATS -->
<!-- ===================================== -->

<div id="stats-panel">

  <div class="stat-item">
    <span class="val" id="count1">0</span>
    <span class="lbl">Projects Built</span>
  </div>

  <div class="stat-item">
    <span class="val" id="count2">0</span>
    <span class="lbl">Clients Satisfied</span>
  </div>

  <div class="stat-item">
    <span class="val" id="count3">0</span>
    <span class="lbl">Years of Trust</span>
  </div>

</div>

`

// ======================================
// CANVAS
// ======================================

const canvas =
  document.querySelector('#three-canvas')

// ======================================
// SCENE
// ======================================

const scene =
  new THREE.Scene()

scene.fog =
  new THREE.Fog('#050505', 10, 45)

// ======================================
// CAMERA
// ======================================

const camera =
  new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

camera.position.set(0, 2, 16)

// ======================================
// RENDERER
// ======================================

const renderer =
  new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })

renderer.setSize(
  window.innerWidth,
  window.innerHeight
)

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
)

renderer.shadowMap.enabled = true

// ======================================
// MAIN GROUP
// ======================================

const cityGroup =
  new THREE.Group()

scene.add(cityGroup)

// ======================================
// MAIN BUILDING
// ======================================

const buildingGeometry =
  new THREE.BoxGeometry(
    4,
    10,
    4
  )

const buildingMaterial =
  new THREE.MeshStandardMaterial({
    color: '#555555',
    metalness: 0.7,
    roughness: 0.3,
  })

const building =
  new THREE.Mesh(
    buildingGeometry,
    buildingMaterial
  )

const loader =
  new GLTFLoader()

let spaceBoi = null

loader.load(

  '/space_boi.glb',

  (gltf) => {

    spaceBoi =
      gltf.scene

    spaceBoi.scale.set(
      2,
      2,
      2
    )

    spaceBoi.position.set(
      0,
      -2,
      -8
    )

    scene.add(spaceBoi)

    gsap.from(
      spaceBoi.position,
      {
        y: -10,
        duration: 2,
        ease: 'power3.out',
      }
    )
  }
)

// ======================================
// LIGHTS
// ======================================

const ambient =
  new THREE.AmbientLight(
    '#888888',
    1.5
  )

scene.add(ambient)

const directional =
  new THREE.DirectionalLight(
    '#ffffff',
    3
  )

directional.position.set(
  5,
  10,
  7
)

scene.add(directional)

const blueLight =
  new THREE.PointLight(
    '#88ccff',
    20,
    30
  )

blueLight.position.set(
  0,
  5,
  5
)

scene.add(blueLight)

// ======================================
// PARTICLES
// ======================================

const particlesGeometry =
  new THREE.BufferGeometry()

const particlesCount = 2000

const positions =
  new Float32Array(
    particlesCount * 3
  )

for (
  let i = 0;
  i < particlesCount * 3;
  i++
) {

  positions[i] =
    (Math.random() - 0.5) * 50
}

particlesGeometry.setAttribute(
  'position',

  new THREE.BufferAttribute(
    positions,
    3
  )
)

const particlesMaterial =
  new THREE.PointsMaterial({
    size: 0.03,
    color: '#ffffff',
  })

const particles =
  new THREE.Points(
    particlesGeometry,
    particlesMaterial
  )

scene.add(particles)

// ======================================
// CURSOR EFFECT
// ======================================

window.addEventListener(
  'mousemove',
  (e) => {

    gsap.to('#cursor', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    })

    gsap.to('#cursor-ring', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
    })

    const x =
      (e.clientX /
      window.innerWidth - 0.5) * 2

    const y =
      (e.clientY /
      window.innerHeight - 0.5) * 2

    gsap.to(
      cityGroup.rotation,
      {
        y: x * 0.3,
        x: y * 0.1,
        duration: 1,
      }
    )

    if (spaceBoi) {

      gsap.to(
        spaceBoi.rotation,
        {
          y: x * 0.5,
          x: y * 0.2,
          duration: 1,
        }
      )
    }
  }
)

// ======================================
// SCROLL EFFECT
// ======================================

window.addEventListener(
  'scroll',
  () => {

    const scrollY =
      window.scrollY

    building.rotation.y =
      scrollY * 0.002

    particles.rotation.y =
      scrollY * 0.0003

    if (spaceBoi) {

      spaceBoi.position.y =
        -2 - scrollY * 0.002

      spaceBoi.rotation.y =
        scrollY * 0.001
    }

    gsap.to(
      '#progress',
      {

        width: `${
          (
            scrollY /
            (
              document.body.scrollHeight -
              window.innerHeight
            )
          ) * 100
        }%`,

        duration: 0.2,
      }
    )
  }
)

// ======================================
// COUNTERS
// ======================================

const counters = [

  {
    id: '#count1',
    value: 100
  },

  {
    id: '#count2',
    value: 10000
  },

  {
    id: '#count3',
    value: 20
  },
]

counters.forEach(counter => {

  let obj = { value: 0 }

  gsap.to(obj, {

    value:
      counter.value,

    duration: 3,

    ease: 'power1.out',

    onUpdate: () => {

      document.querySelector(
        counter.id
      ).innerHTML =
      Math.floor(obj.value)
    }
  })
})

// ======================================
// HERO ANIMATION
// ======================================

gsap.from(
  '#hero-title',
  {
    y: 100,
    opacity: 0,
    duration: 1.5,
  }
)

gsap.from(
  '#hero-sub',
  {
    y: 50,
    opacity: 0,
    duration: 2,
    delay: 0.3,
  }
)

gsap.from(
  '#nav',
  {
    y: -100,
    opacity: 0,
    duration: 1.2,
  }
)

// ======================================
// ANIMATION LOOP
// ======================================

function animate() {

  requestAnimationFrame(
    animate
  )

  particles.rotation.y +=
    0.0005

  cityGroup.rotation.y +=
    0.001

  if (spaceBoi) {

    spaceBoi.rotation.y +=
      0.002
  }

  renderer.render(
    scene,
    camera
  )
}

animate()

// ======================================
// RESIZE
// ======================================

window.addEventListener(
  'resize',
  () => {

    camera.aspect =
      window.innerWidth /
      window.innerHeight

    camera.updateProjectionMatrix()

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )
  }
)