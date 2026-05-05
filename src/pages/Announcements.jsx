const announcements = [
  {
    date: 'Sunday, May 4, 2026',
    title: 'Annual Church Thanksgiving',
    category: 'Event',
    description:
      'Our annual thanksgiving service will be held on Sunday, May 18th. All members are encouraged to come with a heart of gratitude. There will be a shared meal after the service. Please sign up at the welcome desk.',
  },
  {
    date: 'Sunday, May 4, 2026',
    title: 'Youth Camp Registration Open',
    category: 'Youth',
    description:
      'Registration for the mid-year youth camp is now open. The camp runs from June 20–22 at Brackenhurst Conference Centre. Cost is Ksh 2,500 per person. See Bro. Kevin Otieno for details.',
  },
  {
    date: 'Sunday, April 27, 2026',
    title: 'New Members Class',
    category: 'Discipleship',
    description:
      'If you are new to Restoration of the Fountain or would like to formally join the church, our next new members class begins Saturday, May 10th at 9:00 AM. Speak to any elder or pastor to enroll.',
  },
  {
    date: 'Sunday, April 27, 2026',
    title: 'Building Fund Update',
    category: 'Finance',
    description:
      'We give glory to God — the building fund has reached 60% of our target. Thank you for your faithful giving. Contributions can be made via M-Pesa Paybill 123456, Account: BUILDING.',
  },
  {
    date: 'Sunday, April 20, 2026',
    title: 'Women\'s Conference 2026',
    category: 'Women',
    description:
      'The annual women\'s conference is scheduled for May 30th – June 1st. Theme: "Rooted and Grounded in Love" (Ephesians 3:17). Registration forms are available at the back of the hall.',
  },
  {
    date: 'Sunday, April 20, 2026',
    title: 'Volunteer Ushers Needed',
    category: 'Service',
    description:
      'We are looking for volunteers to join the ushering team. If you have a heart for hospitality and serving, please speak to Deacon Peter Mwangi after the service.',
  },
];

const categoryColors = {
  Event:       { bg: '#e8f0fe', text: '#1e4db7' },
  Youth:       { bg: '#e0f0ff', text: '#3a86ff' },
  Discipleship:{ bg: '#f0e8ff', text: '#6c63ff' },
  Finance:     { bg: '#e8fff0', text: '#1a7a4a' },
  Women:       { bg: '#ffe8f5', text: '#c2185b' },
  Service:     { bg: '#fff3e0', text: '#e65100' },
};

export default function Announcements() {
  return (
    <>
      <div className="page-hero">
        <h1>📢 Announcements</h1>
        <p>Stay up to date with what's happening at Restoration of the Fountain</p>
      </div>

      <div className="page-content" style={{ maxWidth: '800px' }}>
        <div className="section-title">
          <h2>Latest Announcements</h2>
          <p>Updated every Sunday after service</p>
          <div className="divider" />
        </div>

        <div className="announcements-list">
          {announcements.map((a, i) => {
            const color = categoryColors[a.category] || { bg: '#e8f0fe', text: '#1e4db7' };
            return (
              <div className="announcement-card" key={i}>
                <div className="announcement-header">
                  <span
                    className="announcement-badge"
                    style={{ background: color.bg, color: color.text }}
                  >
                    {a.category}
                  </span>
                  <span className="announcement-date">{a.date}</span>
                </div>
                <h3 className="announcement-title">{a.title}</h3>
                <p className="announcement-body">{a.description}</p>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '3rem',
          background: 'var(--blue-pale)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--blue-dark)', fontWeight: '600', fontSize: '1.05rem' }}>
            Have an announcement for the church?
          </p>
          <p style={{ color: 'var(--text-light)', marginTop: '0.4rem' }}>
            Submit it to <strong>info@gracechurch.co.ke</strong> by Friday so it can be included in Sunday's bulletin.
          </p>
        </div>
      </div>
    </>
  );
}
