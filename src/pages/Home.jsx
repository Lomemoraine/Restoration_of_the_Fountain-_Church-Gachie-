import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-cross">✝</div>
        <h1>Welcome to Grace Community Church</h1>
        <p>A place of worship, fellowship, and spiritual growth. Everyone is welcome here.</p>
        <p className="hero-verse">"For where two or three gather in my name, there am I with them." — Matthew 18:20</p>
        <div className="hero-btns">
          <Link to="/schedule" className="btn-primary">View Service Times</Link>
          <Link to="/contact" className="btn-outline">Find Us</Link>
        </div>
      </section>

      <section className="quick-info">
        <div className="section-title">
          <h2>Join Us This Week</h2>
          <p>We'd love to have you worship with us</p>
          <div className="divider" />
        </div>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🕊️</div>
            <h3>Sunday Worship</h3>
            <p>Main service every Sunday at 9:00 AM & 11:00 AM. All are welcome.</p>
          </div>
          <div className="card">
            <div className="card-icon">📖</div>
            <h3>Bible Study</h3>
            <p>Wednesday evenings at 6:30 PM. Dive deeper into the Word together.</p>
          </div>
          <div className="card">
            <div className="card-icon">🙏</div>
            <h3>Prayer Meeting</h3>
            <p>Friday mornings at 6:00 AM. Start your day in prayer with the community.</p>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Small Groups</h3>
            <p>Connect with others through our various small groups throughout the week.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <div className="section-title">
          <h2>Our Mission</h2>
          <div className="divider" />
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text-light)' }}>
            We exist to glorify God by making disciples of all nations — loving God, loving people,
            and serving our community with the grace and truth of Jesus Christ.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-primary" style={{ background: 'var(--blue-mid)', color: 'var(--white)' }}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
