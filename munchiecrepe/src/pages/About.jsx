function About() {
  return (
    <>
      <main className="page-hero about-hero">
        <div className="container">
          <p className="tag">Our story</p>
          <h1>A Small Idea to Reality</h1>
          <p>We started with one crepe machine, hard work, and a dream!</p>
        </div>
      </main>

      <section className="section">
        <div className="container split-grid">
          <div>
            <h2>Who we are</h2>
            <p>
              Munchi Crepe store is a real crepe shop located in Nabatieh-Dweir that aims to create
              a warm and welcoming place for students, families, and friends.
            </p>
            <p>
              Our mission is simple: serve high-quality sweet crepes in a clean, stylish, and
              comfortable environment.
            </p>
          </div>
          <div className="timeline-card">
            <h3>Our values</h3>
            <ul className="check-list">
              <li>Fresh ingredients every day</li>
              <li>Clean preparation and presentation</li>
              <li>Friendly customer experience</li>
              <li>Creative menu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container section-heading">
          <p className="tag">Why choose us</p>
          <h2>What makes our store special</h2>
        </div>
        <div className="container features-grid">
          <article className="feature-card">
            <div className="icon">✨</div>
            <h3>Creative Recipes</h3>
            <p>Special signature ideas made with love.</p>
          </article>
          <article className="feature-card">
            <div className="icon">🏪</div>
            <h3>Comfortable Place</h3>
            <p>A modern store design that gives customers a clean and cozy experience.</p>
          </article>
          <article className="feature-card">
            <div className="icon">❤️</div>
            <h3>Customer Service</h3>
            <p>We focus on taste, speed, and satisfaction in every order we prepare.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
