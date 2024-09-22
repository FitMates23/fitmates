import React, { useState } from 'react';

const AdSensePlaceholder = ({ width, height }) => (
  <div style={{
    width: width,
    height: height,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    color: '#888',
    fontSize: '14px',
  }}>
    AdSense Placeholder
  </div>
);

const Header = ({ setCurrentPage }) => (
  <header style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    backdropFilter: 'saturate(180%) blur(20px)',
    padding: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  }}>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '700', cursor: 'pointer', color: '#0056b3' }} onClick={() => setCurrentPage('home')}>FITMATES</h1>
      <div>
        <button onClick={() => setCurrentPage('leaderboard')} style={{ marginRight: '1rem', background: 'none', border: 'none', color: '#0056b3', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Friends Leaderboard</button>
        <button onClick={() => setCurrentPage('home')} style={{ background: '#0056b3', border: 'none', color: 'white', cursor: 'pointer', padding: '8px 16px', borderRadius: '20px', fontSize: '16px', fontWeight: '500' }}>Log Out</button>
      </div>
    </nav>
  </header>
);

const Footer = ({ setCurrentPage }) => (
  <footer style={{ 
    backgroundColor: '#0056b3', 
    color: 'white', 
    padding: '2rem 1rem', 
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '4rem',
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <p>&copy; 2024 FITMATES. All rights reserved.</p>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => setCurrentPage('privacy')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Privacy Policy</button>
        <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Contact Us</button>
        <button onClick={() => setCurrentPage('terms')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Terms of Service</button>
      </div>
    </div>
  </footer>
);

const SocialShareButtons = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
    {['Facebook', 'Twitter', 'Instagram'].map(platform => (
      <button key={platform} style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: '#0056b3',
        color: 'white',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.3s',
      }} onClick={() => alert(`Sharing to ${platform}`)}>
        Share on {platform}
      </button>
    ))}
  </div>
);

const Home = ({ setCurrentPage }) => (
  <div>
    <section style={{ 
      textAlign: 'center', 
      marginBottom: '4rem',
      backgroundImage: 'url("https://source.unsplash.com/1600x900/?mountain,achievement")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '6rem 1rem',
      color: 'black',
      textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
    }}>
      <h2 style={{ fontSize: '64px', fontWeight: '800', marginBottom: '1rem' }}>Connect. Motivate. Achieve.</h2>
      <p style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto 2rem' }}>Join FITMATES and transform your fitness journey with friends. Track progress, stay motivated, and reach your goals together.</p>
      <button onClick={() => setCurrentPage('signup')} style={{ 
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '30px',
        backgroundColor: '#0056b3',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
      }}>Sign Up Now</button>
    </section>
    
    <AdSensePlaceholder width="728px" height="90px" />
    
    <section style={{ marginBottom: '4rem', backgroundColor: 'white', padding: '4rem 1rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', color: '#0056b3' }}>Why Choose FITMATES?</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
        {[
          { emoji: '👥', text: 'Connect with workout buddies', color: '#FF6B6B' },
          { emoji: '📊', text: 'Track group progress', color: '#4ECDC4' },
          { emoji: '🏋️‍♀️', text: 'Daily motivation', color: '#45B7D1' },
          { emoji: '🎯', text: 'Achieve team fitness goals', color: '#F7B731' },
        ].map((item, index) => (
          <div key={index} style={{ flex: '1 1 200px', maxWidth: '250px', textAlign: 'center', padding: '2rem', backgroundColor: item.color, borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', color: 'white' }}>
            <p style={{ fontSize: '64px', margin: '0' }}>{item.emoji}</p>
            <p style={{ fontSize: '18px', fontWeight: '600' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
    
    <AdSensePlaceholder width="300px" height="250px" />
  </div>
);

const FriendsLeaderboard = () => {
  const friends = [
    { name: 'You', score: 850, workouts: [1,0,1,1,0,1,1,1,0,1,1,1,0,1] },
    { name: 'Emma', score: 920, workouts: [1,1,1,0,1,1,1,1,1,0,1,1,1,1] },
    { name: 'Liam', score: 780, workouts: [1,0,1,1,0,1,0,1,1,1,0,1,1,0] },
    { name: 'Sophia', score: 890, workouts: [1,1,0,1,1,1,1,0,1,1,1,0,1,1] },
    { name: 'Noah', score: 810, workouts: [0,1,1,1,1,0,1,1,0,1,1,1,0,1] },
    { name: 'Olivia', score: 940, workouts: [1,1,1,1,1,0,1,1,1,1,1,0,1,1] },
  ];

  const today = new Date();
  const dates = Array.from({length: 14}, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }).reverse();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', color: '#0056b3' }}>Friends Leaderboard</h2>
      
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', borderBottom: '2px solid #f0f0f0', padding: '1rem', backgroundColor: '#f8f9fa' }}>
          <div style={{ flex: '0 0 100px', fontWeight: '700', color: '#0056b3' }}>Name</div>
          <div style={{ flex: '0 0 100px', fontWeight: '700', color: '#0056b3' }}>Score</div>
          {dates.map((date, i) => (
            <div key={i} style={{ flex: '1', textAlign: 'center', fontWeight: '700', color: '#0056b3', minWidth: '60px' }}>{date}</div>
          ))}
        </div>
        {friends.map((friend, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            borderBottom: '1px solid #f0f0f0',
            backgroundColor: friend.name === 'You' ? '#e6f2ff' : 'white',
            transition: 'background-color 0.3s',
          }}>
            <div style={{ flex: '0 0 100px', padding: '1rem', fontSize: '16px', fontWeight: '600', color: '#333' }}>{friend.name}</div>
            <div style={{ flex: '0 0 100px', padding: '1rem', fontSize: '16px', fontWeight: '600', color: '#0056b3' }}>{friend.score}</div>
            {friend.workouts.map((workout, i) => (
              <div key={i} style={{
                flex: '1',
                minWidth: '60px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: workout ? '#4CAF50' : 'transparent',
                color: workout ? 'white' : '#4CAF50',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s ease',
              }}>
                {workout ? '✓' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '2rem 0 1rem', color: '#0056b3' }}>Share Your Progress</h3>
      <SocialShareButtons />
    </div>
  );
};

const TermsOfService = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
    <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Terms of Service</h2>
    <p>Welcome to FITMATES. By using our service, you agree to the following terms:</p>
    <ol style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
      <li>Eligibility: You must be at least 18 years old to use this service.</li>
      <li>Account Responsibility: You are responsible for maintaining the confidentiality of your account and password.</li>
      <li>Acceptable Use: You agree to use the service for lawful purposes only and not to violate any applicable laws or regulations.</li>
      <li>Content: You retain ownership of any content you submit to the service, but grant FITMATES a license to use, modify, and display that content.</li>
      <li>Termination: We reserve the right to terminate or suspend accounts that violate our policies or terms of service.</li>
      <li>Changes to Service: We may modify or discontinue any part of the service at any time without notice.</li>
      <li>Disclaimer of Warranties: The service is provided "as is" without any warranties of any kind.</li>
      <li>Limitation of Liability: FITMATES shall not be liable for any indirect, incidental, special, consequential or punitive damages.</li>
    </ol>
    <p>These terms may be updated from time to time. Continued use of the service after any changes constitutes acceptance of the new terms.</p>
  </div>
);

const PrivacyPolicy = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
    <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Privacy Policy</h2>
    <p>At FITMATES, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information:</p>
    <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
      <li>Information Collection: We collect personal information you provide to us for account creation and service improvement.</li>
      <li>Use of Information: We use your information to provide and improve our services, personalize your experience, and communicate with you.</li>
      <li>Data Protection: We implement a variety of security measures to maintain the safety of your personal information.</li>
      <li>Cookies: We use cookies to enhance your browsing experience and analyze site traffic.</li>
      <li>Third-party Disclosure: We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</li>
      <li>User Rights: You can request to view, edit, or delete your personal data at any time.</li>
      <li>Changes to Policy: We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</li>
    </ul>
    <p>If you have any questions about this privacy policy, please contact our privacy officer at privacy@fitmates.com.</p>
  </div>
);

// ... (all previous code remains the same)

const ContactUs = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
    <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Contact Us</h2>
    <p>We're here to help! Get in touch with us using any of the following methods:</p>
    <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
      <li>Email: support@fitmates.com</li>
      <li>Phone: 1-800-FITMATES (1-800-348-6283)</li>
      <li>Address: 123 Fitness Street, Healthy City, FC 12345, United States</li>
    </ul>
    <p>Our customer service team is available Monday to Friday, 9 AM to 5 PM EST.</p>
    <h3 style={{ color: '#0056b3', marginTop: '2rem', marginBottom: '1rem' }}>Send us a message</h3>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="text" placeholder="Your Name" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input type="email" placeholder="Your Email" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
      <textarea placeholder="Your Message" rows="5" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
      <button type="submit" style={{ 
        padding: '0.5rem 1rem', 
        backgroundColor: '#0056b3', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        alignSelf: 'flex-start'
      }}>Send Message</button>
    </form>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'leaderboard':
        return <FriendsLeaderboard />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'contact':
        return <ContactUs />;
      case 'terms':
        return <TermsOfService />;
      case 'signup':
        return <div style={{ padding: '2rem' }}>Sign Up Page</div>;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', 
      color: '#333', 
      lineHeight: 1.6,
      backgroundColor: '#F5F5F7',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header setCurrentPage={setCurrentPage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;