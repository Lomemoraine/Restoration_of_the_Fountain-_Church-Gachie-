export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>About Us</h1>
        <p>Our story, our faith, our family</p>
      </div>

      <div className="page-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Restoration of the Fountain Church was founded in 1995 with a vision to build a Christ-centered
              community in the heart of Gachie and it's environs. From humble beginnings in a small rented hall, we have grown into a vibrant congregation
            </p>
            <p>
              We are a multi-generational church that believes in the power of the Gospel to
              transform lives. Our doors are open to everyone — regardless of background,
              age, or walk of life.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--blue-dark), var(--blue-light))',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            fontSize: '6rem'
          }}>
            ✝
          </div>
        </div>

        <div className="section-title">
          <h2>Our Core Values</h2>
          <div className="divider" />
        </div>
        <div className="values-grid">
          {[
            { icon: '📖', title: 'Scripture', desc: 'The Bible is our foundation and guide for all of life.' },
            { icon: '🙏', title: 'Prayer', desc: 'We are a praying church that depends on God in all things.' },
            { icon: '❤️', title: 'Community', desc: 'We do life together — bearing one another\'s burdens.' },
            { icon: '🌍', title: 'Outreach', desc: 'We serve our city and support missions around the world.' },
            { icon: '🎵', title: 'Worship', desc: 'We glorify God through heartfelt, Spirit-led worship.' },
            { icon: '🌱', title: 'Discipleship', desc: 'We are committed to growing every believer in Christ.' },
          ].map(v => (
            <div className="value-card" key={v.title}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', background: 'var(--blue-pale)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--blue-dark)', marginBottom: '1rem' }}>Our Leadership</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              { name: 'Reverend Esther Rigan', role: 'Church Pastor' },
              { name: 'Evangelist Mary Kawira', role: 'Evangelist' },
              // { name: 'Elder Samuel Ochieng', role: 'Board Chairman' },
              // { name: 'Deacon Mary Kamau', role: 'Women\'s Ministry' },
            ].map(l => (
              <div key={l.name} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--blue-mid)', margin: '0 auto 0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white' }}>👤</div>
                <h4 style={{ color: 'var(--blue-dark)', fontSize: '0.95rem' }}>{l.name}</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
