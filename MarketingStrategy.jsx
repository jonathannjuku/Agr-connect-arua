import React from 'react';

const MarketingStrategy = () => {
  const channels = [
    { name: 'WhatsApp Business', icon: '📱', tactic: 'Direct order updates & "Catch of the Day" broadcasts for Arua professionals.' },
    { name: 'Facebook & Instagram', icon: '🌐', tactic: 'Localized "Farm-to-Table" video stories featuring Pajulu farmers.' },
    { name: 'Search Engine Optimization', icon: '🔍', tactic: 'Targeting "Fresh vegetables Arua" to attract organic traffic.' },
    { name: 'SMS Marketing', icon: '📩', tactic: 'Automated price alerts for farmers and delivery reminders for buyers.' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
      {channels.map((channel, index) => (
        <div key={index} style={{ 
          padding: '15px', 
          borderRadius: '8px', 
          borderLeft: '5px solid #FF8F00', // Sun-Kissed Orange Accent
          backgroundColor: '#f9f9f9' 
        }}>
          <h4 style={{ color: '#2D5A27', margin: '0 0 10px 0' }}>{channel.icon} {channel.name}</h4>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>{channel.tactic}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketingStrategy;