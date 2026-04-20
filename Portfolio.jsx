import React from 'react';
import LeanCanvas from '../components/Milestone-1/LeanCanvas';
import MarketingStrategy from '../components/Milestone-3/MarketingStrategy';
import ProjectEvaluation from '../components/Milestone5/ProjectEvaluation';

const Portfolio = () => {
  return (
    <div style={{ 
      maxWidth: '1100px', 
      margin: '0 auto', 
      padding: '40px 20px', 
      fontFamily: 'Trebuchet MS, sans-serif',
      lineHeight: '1.6',
      textAlign: 'justify',
      color: '#333'
    }}>
      {/* Header Section: Milestone 2 Branding */}
      <header style={{ 
        borderBottom: '4px solid #FF8F00', 
        marginBottom: '50px', 
        paddingBottom: '20px' 
      }}>
        <h1 style={{ color: '#2D5A27', fontSize: '2.5rem', marginBottom: '10px' }}>
          Venture Portfolio: Agri-Connect Arua
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#5D4037', fontWeight: 'bold' }}>
          ENT3251 Digital Marketing & ICT Entrepreneurship
        </p>
      </header>

      {/* Milestone 1: Problem & Solution Validation */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #2D5A27', display: 'inline-block' }}>
          Milestone 1: Business Logic
        </h2>
        <p style={{ marginTop: '15px' }}>
          Our Lean Canvas identifies the critical gap between <strong>Pajulu/Logiri</strong> smallholder farmers 
          and urban professionals in <strong>Arua Town</strong>.
        </p>
        <LeanCanvas />
      </section>

      {/* Milestone 3: Digital Channel Strategy (Figma Integrated) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #2D5A27', display: 'inline-block' }}>
          Milestone 3: Digital Marketing Strategy
        </h2>
        <p style={{ marginTop: '15px' }}>
          Based on our Figma wireframes, we have deployed a multi-channel approach to reach both 
          farmers and consumers.
        </p>
        <MarketingStrategy />
      </section>

      {/* Milestone 5: Field Evidence (Video Section) */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '30px', 
        backgroundColor: '#f4fbf3', 
        borderRadius: '12px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{ color: '#2D5A27', marginTop: 0 }}>Milestone 5: Primary Research Evidence</h2>
        <p>
          The following video serves as empirical validation of the post-harvest losses faced 
          by local sellers in Arua markets.
        </p>
        
        <div style={{ 
          marginTop: '20px', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          backgroundColor: '#000'
        }}>
          <video 
            width="100%" 
            controls 
            playsInline
            style={{ display: 'block' }}
          >
            {/* Direct link to your file in public/videos/ */}
            <source src="/videos/seller-interview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p style={{ fontSize: '0.9rem', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
          Figure 1.1: Verification interview with Arua market vendor.
        </p>
      </section>

      {/* Milestone 5: Evaluation */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#2D5A27', borderBottom: '2px solid #2D5A27', display: 'inline-block' }}>
          Final Project Evaluation
        </h2>
        <ProjectEvaluation />
      </section>

      {/* Institutional Motto & Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 0', 
        borderTop: '2px solid #eee',
        marginTop: '40px' 
      }}>
        <p style={{ 
          color: '#FF8F00', 
          fontWeight: 'bold', 
          fontSize: '1.3rem',
          margin: 0 
        }}>
          "A Farmer has plenty to eat"
        </p>
        <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '10px' }}>
          &copy; 2026 Jonathan | Uganda Christian University | Arua Campus
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;