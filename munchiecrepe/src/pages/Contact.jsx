import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', guests: '', message: ''
  })
  const [error, setError] = useState('')
  const [showPhonePrompt, setShowPhonePrompt] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value })
    setError('')
  }

  function submitReservation() {
    setSuccess(true)
    setShowPhonePrompt(false)
    setForm({ name: '', email: '', phone: '', guests: '', message: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(false)
    setError('')

    const { name, email, guests, message, phone } = form

    if (!name.trim() || !email.trim() || !guests.trim() || !message.trim()) {
      setError('Please fill in all fields before sending your request.')
      return
    }

    if (!phone.trim()) {
      setShowPhonePrompt(true)
      return
    }

    submitReservation()
  }

  return (
    <>
      <main className="page-hero contact-hero">
        <div className="container">
          <p className="tag">Get in touch</p>
          <h1>Reserve, ask, or send us your feedback!!</h1>
          <p>Use the form below and our team will contact you shortly.</p>
        </div>
      </main>

      <section className="section">
        <div className="container contact-grid">

          <div className="contact-info">
            <h2>Contact Information</h2>
            <br />
            <p><strong>Phone:</strong> +961 81609254</p>
            <p><strong>Email:</strong> 42230246@students.liu.edu.lb</p>
            <p><strong>Address:</strong> al Janub, Lebanon</p>
            <p><strong>Opening Hours:</strong> 5 days a week from 10:00 AM to 11:00 PM</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Reservation Form</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name"
                value={form.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email"
                value={form.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" placeholder="Enter your number (Optional)"
                value={form.phone} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" placeholder="2" min="1"
                value={form.guests} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5"
                placeholder="Write your request or reservation details"
                value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Send Request</button>

            {error && (
              <p className="form-message" style={{ color: '#c0392b' }}>{error}</p>
            )}

            {success && (
              <p className="form-message" style={{ color: '#1e8449' }}>
                ✅ Your reservation has been sent successfully!
              </p>
            )}

            {/* Phone prompt — replaces SweetAlert2 */}
            {showPhonePrompt && (
              <div style={{
                marginTop: '1rem',
                padding: '1.2rem',
                borderRadius: '14px',
                background: '#fff7ef',
                border: '1px solid #f0c89a'
              }}>
                <p style={{ marginBottom: '0.8rem', fontWeight: 600 }}>
                  ℹ️ For better service, please enter your phone number.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}
                    onClick={submitReservation}
                  >
                    Continue without phone
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}
                    onClick={() => setShowPhonePrompt(false)}
                  >
                    I'll add my phone number
                  </button>
                </div>
              </div>
            )}
          </form>

        </div>
      </section>
    </>
  )
}

export default Contact
