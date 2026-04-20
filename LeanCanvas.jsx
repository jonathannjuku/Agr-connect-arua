import React from 'react';

const LeanCanvas = () => {
  const canvasData = [
    { id: 1, title: "Problem", content: "High post-harvest losses in West Nile (30%+); Middlemen exploitation of farmers in Pajulu/Vurra; Urban professionals lack time to shop." },
    { id: 2, title: "Solution", content: "Direct farm-to-table web platform; Real-time inventory tracking; 24-hour delivery service in Arua City." },
    { id: 3, title: "Unique Value Proposition", content: "Fresh organic produce from West Nile farms to your door at fair prices. 'Smart Farming, Smarter Markets.'" },
    { id: 4, title: "Unfair Advantage", content: "Direct access to Logiri cooperative networks and a custom-built React/Node.js tech stack for speed." },
    { id: 5, title: "Customer Segments", content: "Primary: Arua urban workers (Grace). Secondary: Small-scale West Nile farmers (Moses)." },
    { id: 6, title: "Key Metrics", content: "Number of active farmers; Weekly order growth; Customer retention rate." },
    { id: 7, title: "Channels", content: "WhatsApp Business; Facebook Geo-targeted Ads; Local SEO; SMS notifications." },
    { id: 8, title: "Cost Structure", content: "Web hosting (Vercel); SMS API integration; Logistics and delivery bike maintenance." },
    { id: 9, title: "Revenue Streams", content: "10% commission per transaction; Subscription-based 'Fresh Boxes'; Premium farmer listing fees." }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#2D5A27', textAlign: 'center' }}>Milestone 1: Lean Canvas Validation</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '15px', 
        marginTop: '20px' 
      }}>
        {canvasData.map((item) => (
          <div key={item.id} style={{ 
            border: '2px solid #2D5A27', 
            borderRadius: '8px', 
            padding: '15px', 
            backgroundColor: '#fff' 
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#FF8F00', textTransform: 'uppercase' }}>{item.title}</h4>
            <p style={{ fontSize: '14px', margin: 0, color: '#333' }}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeanCanvas;