import React from 'react';
import ProductCatalog from '../components/Milestone-4/ProductCatalog';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        backgroundColor: '#f4fbf3', 
        backgroundImage: 'linear-gradient(rgba(45, 90, 39, 0.05), rgba(45, 90, 39, 0.05))'
      }}>
        <h1 style={{ color: '#2D5A27', fontSize: '3rem', marginBottom: '20px' }}>
          Farm-to-Table Freshness in 24 Hours
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
          Supporting smallholder farmers in Pajulu and Logiri by delivering 
          organic produce directly to your doorstep in Arua Town.
        </p>
        <button style={{ 
          backgroundColor: '#FF8F00', 
          padding: '15px 40px', 
          fontSize: '1.1rem',
          borderRadius: '30px'
        }}>
          Shop Fresh Boxes
        </button>
      </section>

      {/* Featured Marketplace */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Arua's Weekly Harvest</h2>
        <ProductCatalog />
      </section>
    </div>
  );
};

export default Home;