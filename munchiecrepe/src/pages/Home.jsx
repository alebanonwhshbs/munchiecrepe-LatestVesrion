import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const reviews = [
  { text: '"The kinder crepe rolls were amazing and the service was super friendly."', author: '— Dr. Rabia' },
  { text: '"Best Nutella crepe I have tried. The place looks modern and clean."', author: '— Karim' },
  { text: '"Other than delicious crepes, The milkshakes are amazing."', author: '— Leen' },
]

function Home() {
  const [currentReview, setCurrentReview] = useState(0)
  const intervalRef = useRef(null)

  function startAutoplay() {
    intervalRef.current = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoplay()
    return () => clearInterval(intervalRef.current)
  }, [])

  function handlePrev() {
    clearInterval(intervalRef.current)
    setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length)
    startAutoplay()
  }

  function handleNext() {
    clearInterval(intervalRef.current)
    setCurrentReview(prev => (prev + 1) % reviews.length)
    startAutoplay()
  }

  return (
    <main>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="tag">Fresh &amp; Sweet</p>
            <h1>Our Crepes Made With Love</h1>
            <p>
              Welcome to Munchie Crepe store, where every crepe is prepared with fresh ingredients,
              and unforgettable flavor combinations.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
              <Link to="/contact" className="btn btn-secondary">Reserve a Table</Link>
            </div>
          </div>
          <div className="hero-card floating-card">
            <div className="plate"></div>
            <div className="hero-badge">Our Best Seller</div>
            <h3>Nutella Crepe Roll</h3>
            <p>Fresh bananas, warm Nutella, delicious brownies and cream.</p>
            <span className="price">$7.50</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="tag">Why customers love us</p>
            <h2>More than just a crepe shop</h2>
          </div>
          <div className="features-grid">
            <article className="feature-card">
              <div className="icon">🥞</div>
              <h3>Fresh Daily</h3>
              <p>Our recipe is prepared every day for light and delicious crepes.</p>
            </article>
            <article className="feature-card">
              <div className="icon">🍓</div>
              <h3>Quality Ingredients</h3>
              <p>We use fresh fruits, premium chocolate and flavorful Toppings.</p>
            </article>
            <article className="feature-card">
              <div className="icon">🚀</div>
              <h3>Fast Service</h3>
              <p>Dine in, take away, or reserve quickly through our contact page.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Special offer / Stats */}
      <section className="section light-section">
        <div className="container split-grid">
          <div>
            <p className="tag">Special offer</p>
            <h2>Buy 2 crepes get 1 drink for free</h2>
            <p>Choose what comes to your mind</p>
            <ul className="check-list">
              <li>Chocolate</li>
              <li>Fruit, biscuit and toppings</li>
              <li>Extra sauces and Tasty-toppings</li>
            </ul>
            <Link to="/menu" className="btn btn-primary">Start Choosing</Link>
          </div>
          <div className="stats-box">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Menu Items</p>
            </div>
            <div className="stat-card">
              <h3>~4.9</h3>
              <p>Customer Ratings</p>
            </div>
            <div className="stat-card">
              <h3>6 Days</h3>
              <p>a Week</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Freshly Prepared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container review-wrap">
          <div className="section-heading left-align">
            <p className="tag">Customer reviews~</p>
            <h2>What people say?</h2>
          </div>
          <div className="review-slider">
            <div className="review active-review">
              <p>{reviews[currentReview].text}</p>
              <h4>{reviews[currentReview].author}</h4>
            </div>
            <div className="slider-buttons">
              <button className="small-btn" onClick={handlePrev}>&lt;~</button>
              <button className="small-btn" onClick={handleNext}>~&gt;</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
