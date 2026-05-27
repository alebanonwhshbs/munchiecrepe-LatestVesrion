import { useState } from 'react'

const menuItems = [
  { id: 1, category: 'sweet',   name: 'Nutella Crepe Roll',   desc: 'Nutella, banana slices, biscuit crunch, whipped cream',                              price: '$7.50' },
  { id: 2, category: 'sweet',   name: 'Lotus Crepe',          desc: 'Lotus spread, Lotus crumbs and chocolate Tasty-toppings',                            price: '$5.50' },
  { id: 3, category: 'sweet',   name: 'Big Crepe',            desc: 'Fresh strawberries, white chocolate, bananas and whipped cream',                     price: '$7.80' },
  { id: 4, category: 'special', name: 'Fettuccini Crepe',     desc: 'A crepe slice cut into small fillings with toppings, and your favorite Fruits',      price: 'From $6.50' },
  { id: 5, category: 'special', name: 'Munchie Crepe Box',    desc: 'Six small assorted crepes perfect for sharing with chocolate toppings of your choice', price: '$12.00' },
  { id: 6, category: 'special', name: 'Limited Time Offer',   desc: '4 crepes, 3 of your preferred chocolate topping (Addon: 2 children milkshakes)',     price: '$24.00' },
]

const filters = [
  { value: 'all',     label: 'All' },
  { value: 'sweet',   label: 'Sweet' },
  { value: 'special', label: 'Special' },
]

function Menu() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible = menuItems.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  )

  return (
    <>
      <main className="page-hero menu-hero">
        <div className="container">
          <p className="tag">Our menu</p>
          <h1>Choose your favorite crepe</h1>
          <p>Sweet and custom creations prepared fresh for you.</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active-filter' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {visible.map(item => (
              <article key={item.id} className="menu-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
