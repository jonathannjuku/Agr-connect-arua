import React from 'react';

const FeatureList = () => {
  const features = [
    { title: "Direct Farmer Link", desc: "Order directly from verified cooperatives in Pajulu and Vurra." },
    { title: "24-Hour Delivery", desc: "Produce harvested at 6 AM is at your door by 6 PM." },
    { title: "Mobile Money Integration", desc: "Seamless checkout via MTN and Airtel Money." },
    { title: "Farmer Traceability", desc: "Every product comes with a QR code showing the farm's origin." },
    { title: "Subscription Boxes", desc: "Weekly automated delivery of seasonal staples for busy families." },
    { title: "Real-time SMS Alerts", desc: "Instant notifications for farmers when an order is placed." }
  ];

  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '25px', 
      backgroundColor: 'var(--primary-green)', 
      color: 'white', 
      borderRadius: '15px' 
    }}>
      <h3 style={{ color: 'white' }}>Core Solution Features</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {features.map((f, i) => (
          <div key={i}>
            <h5 style={{ margin: '0 0 5px 0', color: 'var(--accent-orange)' }}>✔ {f.title}</h5>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;