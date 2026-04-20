import React from 'react';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

// Milestone Components
import LeanCanvas from './components/Milestone-1/LeanCanvas';
import MarketingStrategy from './components/Milestone-3/MarketingStrategy';
import ProductCatalog from './components/Milestone-4/ProductCatalog';
import FeatureList from './components/Milestone-4/FeatureList';
import ProjectEvaluation from './components/Milestone5/ProjectEvaluation';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Trebuchet MS, sans-serif', 
      lineHeight: '1.6', 
      textAlign: 'justify',
      color: '#333'
    }}>
      {/* Navbar with the large logo and new tagline */}
      <Navbar />

      {/* Hero Section */}
      <header style={{ 
        backgroundColor: '#2D5A27', 
        color: 'white', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Agri-Connect Arua</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#FF8F00' }}>
          "Farm-to-table freshness in 24 hours"
        </p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Milestone 1 Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #FF8F00' }}>
            Milestone 1: Lean Canvas
          </h2>
          <LeanCanvas />
        </section>

        {/* Milestone 3 Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #FF8F00' }}>
            Milestone 3: Marketing Strategy
          </h2>
          <MarketingStrategy />
        </section>

        {/* Milestone 4 Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #FF8F00' }}>
            Milestone 4: Product Marketplace
          </h2>
          <ProductCatalog />
          <FeatureList />
        </section>

        {/* Milestone 5: The Interview Evidence */}
        <section style={{ 
          marginBottom: '60px', 
          padding: '30px', 
          backgroundColor: '#f4fbf3', 
          borderRadius: '12px',
          border: '1px solid #ddd'
        }}>
          <h2 style={{ color: '#2D5A27', marginTop: 0 }}>Milestone 5: Field Validation</h2>
          <p>Primary research evidence: Interview with vegetable vendor in Arua regarding post-harvest waste.</p>
          
          <div style={{ 
            marginTop: '20px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            backgroundColor: '#000'
          }}>
            <video width="100%" controls playsInline style={{ display: 'block' }}>
              <source src="/videos/seller-interview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Final Evaluation */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #FF8F00' }}>
            Project Evaluation
          </h2>
          <ProjectEvaluation />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;