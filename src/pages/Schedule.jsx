const services = [
  { day: 'Sunday', time: '9:00 AM - 10:00 AM', name: 'Morning Service', location: 'Main Hall', type: 'Worship' },
  { day: 'Sunday', time: '10:00 AM - 11:00 AM', name: 'Bible study', location: 'Main Hall', type: 'Worship' },
  { day: 'Sunday', time: '11:00 AM - 12:30 PM', name: 'Preaching', location: 'Main Hall', type: 'Youth' },
  { day: 'Sunday', time: '12:30 PM - 1:30 PM', name: 'Prayer', location: 'Main Hall', type: 'Study' },
  { day: 'Monday', time: '10:00 AM - 4:00 PM', name: 'Prayer and Fasting', location: 'Main Hall', type: 'Prayer' },
  { day: 'Tuesday', time: '10:00 PM - 4:00 PM', name: 'Men\'s Fellowship', location: 'Main Hall', type: 'Youth' },
  { day: 'Wednesday', time: '10:00 PM - 4:00 PM', name: 'Women\'s Fellowship', location: 'Children\'s Wing', type: 'Children' },
  { day: 'Saturday', time: '4:00 PM - 6:00 PM', name: 'Praise & Worship team', location: 'Main Hall', type: 'Music' },
];

const badgeColors = {
  Worship: '#1e4db7',
  Youth: '#3a86ff',
  Study: '#0a2463',
  Prayer: '#6c63ff',
  Children: '#00b4d8',
  Music: '#48cae4',
};

const smallGroups = [
  { name: 'Men\'s Fellowship', meets: 'Every Saturday, 8:00 AM', leader: 'Elder James Kariuki', focus: 'Men\'s discipleship & accountability' },
  { name: 'Women\'s Ministry', meets: 'Every Tuesday, 5:00 PM', leader: 'Deacon Mary Kamau', focus: 'Women\'s Bible study & support' },
  { name: 'Youth Group (13–17)', meets: 'Sunday after service', leader: 'Bro. Kevin Otieno', focus: 'Teen discipleship & mentorship' },
  { name: 'Young Adults (18–35)', meets: 'Friday, 7:00 PM', leader: 'Sis. Faith Njeri', focus: 'Life skills, faith & community' },
  { name: 'Couples Fellowship', meets: 'Last Saturday monthly', leader: 'Pastor & Mrs. Mwangi', focus: 'Marriage enrichment & prayer' },
  { name: 'Seniors Ministry', meets: 'Every Thursday, 10:00 AM', leader: 'Elder Samuel Ochieng', focus: 'Fellowship & pastoral care' },
];

export default function Schedule() {
  return (
    <>
      <div className="page-hero">
        <h1>Service Schedule</h1>
        <p>Join us for worship, study, and fellowship</p>
      </div>

      <div className="page-content">
        <div className="section-title">
          <h2>Weekly Services</h2>
          <div className="divider" />
        </div>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Service</th>
              <th>Location</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={i}>
                <td><strong>{s.day}</strong></td>
                <td>{s.time}</td>
                <td>{s.name}</td>
                <td>{s.location}</td>
                <td>
                  <span className="badge" style={{ background: badgeColors[s.type] + '22', color: badgeColors[s.type] }}>
                    {s.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="section-title" style={{ marginTop: '4rem' }}>
          <h2>Small Groups</h2>
          <p>Connect deeper through our community groups</p>
          <div className="divider" />
        </div>

        <div className="cards-grid">
          {smallGroups.map((g, i) => (
            <div className="card" key={i} style={{ textAlign: 'left' }}>
              <div className="card-icon" style={{ textAlign: 'center' }}>👥</div>
              <h3 style={{ textAlign: 'center' }}>{g.name}</h3>
              <p style={{ marginTop: '0.8rem' }}><strong>Meets:</strong> {g.meets}</p>
              <p><strong>Leader:</strong> {g.leader}</p>
              <p><strong>Focus:</strong> {g.focus}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', background: 'var(--blue-pale)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--blue-dark)', fontWeight: '600', fontSize: '1.05rem' }}>
            Interested in joining a small group?
          </p>
          <p style={{ color: 'var(--text-light)', marginTop: '0.4rem' }}>
            Contact us at <strong>info@gracechurch.co.ke</strong> or speak to any of our pastors after service.
          </p>
        </div>
      </div>
    </>
  );
}
