import * as THREE from 'three'
import gsap from 'gsap'

export function loadHome(app) {

  app.innerHTML = `

  <div id="progress"></div>

  <div id="cursor"></div>
  <div id="cursor-ring"></div>

  <canvas id="three-canvas"></canvas>

  <nav id="nav">

    <div class="logo">
      CR<span>Landmarkz</span>
    </div>

    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

  </nav>

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

  </section>
  `

  const canvas = document.querySelector('#three-canvas')

  const scene = new THREE.Scene()

  scene.fog = new THREE.Fog('#050505', 10, 40)

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.set(0, 2, 16)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  const cityGroup = new THREE.Group()

  scene.add(cityGroup)

  // CENTER BUILDING

  const buildingGeometry = new THREE.BoxGeometry(4, 10, 4)

  const buildingMaterial =
    new THREE.MeshStandardMaterial({
      color: '#555555',
      metalness: 0.7,
      roughness: 0.3,
    })

  const building = new THREE.Mesh(
    buildingGeometry,
    buildingMaterial
  )

  cityGroup.add(building)

  // WINDOWS

  const windowMaterial =
    new THREE.MeshStandardMaterial({
      color: '#88ccff',
      emissive: '#88ccff',
      emissiveIntensity: 1,
    })

  const windowGeometry =
    new THREE.BoxGeometry(0.5, 0.5, 0.1)

  for (let y = -3.5; y <= 3.5; y += 1.2) {

    for (let x = -1.2; x <= 1.2; x += 1.2) {

      const frontWindow = new THREE.Mesh(
        windowGeometry,
        windowMaterial
      )

      frontWindow.position.set(x, y, 2.05)

      building.add(frontWindow)
    }
  }

  // DOOR

  const doorGeometry =
    new THREE.BoxGeometry(1, 2, 0.2)

  const doorMaterial =
    new THREE.MeshStandardMaterial({
      color: '#111111',
    })

  const door = new THREE.Mesh(
    doorGeometry,
    doorMaterial
  )

  door.position.set(0, -4, 2.1)

  building.add(door)

  // SIDE BUILDINGS

  for (let i = 0; i < 6; i++) {

    const geo = new THREE.BoxGeometry(
      Math.random() * 2 + 1,
      Math.random() * 8 + 3,
      Math.random() * 2 + 1
    )

    const mat =
      new THREE.MeshStandardMaterial({
        color: '#2b2b2b',
      })

    const mesh = new THREE.Mesh(geo, mat)

    mesh.position.x = -10 - Math.random() * 8
    mesh.position.z = -5 - Math.random() * 10
    mesh.position.y = -2

    cityGroup.add(mesh)
  }

  for (let i = 0; i < 6; i++) {

    const geo = new THREE.BoxGeometry(
      Math.random() * 2 + 1,
      Math.random() * 8 + 3,
      Math.random() * 2 + 1
    )

    const mat =
      new THREE.MeshStandardMaterial({
        color: '#2b2b2b',
      })

    const mesh = new THREE.Mesh(geo, mat)

    mesh.position.x = 10 + Math.random() * 8
    mesh.position.z = -5 - Math.random() * 10
    mesh.position.y = -2

    cityGroup.add(mesh)
  }

  // LIGHTS

  const ambient =
    new THREE.AmbientLight('#888888', 1.5)

  scene.add(ambient)

  const directional =
    new THREE.DirectionalLight('#ffffff', 3)

  directional.position.set(5, 10, 7)

  scene.add(directional)

  // ANIMATION

  function animate() {

    requestAnimationFrame(animate)

    cityGroup.rotation.y += 0.001

    renderer.render(scene, camera)
  }

  animate()

  // GSAP

  gsap.from('#hero-title', {
    y: 100,
    opacity: 0,
    duration: 1.5,
  })

  gsap.from('#hero-sub', {
    y: 50,
    opacity: 0,
    duration: 2,
  })
}