export function loadProjects(app) {

  app.innerHTML = `

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

  <section class="page-section">

    <h1>Projects</h1>

    <div class="projects-grid">

      <div class="project-card">
        <h3>Horizon Heights</h3>
        <p>Luxury residential tower in Mumbai.</p>
      </div>

      <div class="project-card">
        <h3>The Exchange</h3>
        <p>Commercial office complex in Pune.</p>
      </div>

      <div class="project-card">
        <h3>Greenfield City</h3>
        <p>Integrated township in Hyderabad.</p>
      </div>

    </div>

  </section>
  `
}