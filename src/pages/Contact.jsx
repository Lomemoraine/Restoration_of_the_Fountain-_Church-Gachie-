// Replace the src with your actual Google Maps embed URL for your church location
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.6822!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000";
const MAPS_LINK = "https://maps.google.com/?q=-1.2208681,36.7688866";

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <h4>Physical Address</h4>
                <p>Gachie <br />Kiambu, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+254 736 083 386<br />+254 736 083 386</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@restorationofthefountain.co.ke<br />pastor@restorationofthefountain.co.ke</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">🕐</div>
              <div>
                <h4>Office Hours</h4>
                <p>Wednesday & Thursday: 10:00 AM – 4:00 PM<br />Saturday: 3:00 PM – 6:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">🌐</div>
              <div>
                <h4>Social Media</h4>
                <p>Facebook: Restoration of the Fountain<br />Instagram: @restorationofthefountain</p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ color: 'var(--blue-dark)', marginBottom: '1rem' }}>Find Us on the Map</h2>
            <div className="map-container">
              <iframe
                src={MAPS_EMBED}
                title="Church Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>

        <div style={{ marginTop: '4rem', background: 'var(--blue-pale)', borderRadius: '16px', padding: '2.5rem' }}>
          <h2 style={{ color: 'var(--blue-dark)', marginBottom: '1.5rem', textAlign: 'center' }}>Send Us a Message</h2>
          <form onSubmit={e => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); e.target.reset(); }}
            style={{ display: 'grid', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input required placeholder="Your Name" style={inputStyle} />
              <input required type="email" placeholder="Email Address" style={inputStyle} />
            </div>
            <input placeholder="Subject" style={inputStyle} />
            <textarea required rows={5} placeholder="Your message..." style={{ ...inputStyle, resize: 'vertical' }} />
            <button type="submit" style={{
              background: 'var(--blue-mid)', color: 'white', border: 'none',
              padding: '0.85rem', borderRadius: '8px', fontWeight: '700',
              fontSize: '1rem', cursor: 'pointer'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1.5px solid #c5d5f5',
  fontSize: '0.95rem',
  outline: 'none',
  width: '100%',
  fontFamily: 'inherit',
};
