import React from 'react';

const Persona = ({ name, role, age, location, goals, pains, bio }) => {
  return (
    <div style={{ 
      border: '1px solid var(--earth-brown)', 
      borderRadius: '12px', 
      padding: '20px', 
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ color: 'var(--primary-green)', marginBottom: '5px' }}>{name}</h3>
      <p style={{ fontSize: '14px', color: '#666', marginTop: 0 }}>
        <strong>{role}</strong> | {age} Years | {location}
      </p>
      <hr style={{ border: '0.5px solid #eee' }} />
      
      <p style={{ fontSize: '14px' }}><em>"{bio}"</em></p>
      
      <div style={{ marginTop: '15px' }}>
        <strong style={{ color: 'var(--accent-orange)' }}>Goals:</strong>
        <p style={{ fontSize: '13px', margin: '5px 0' }}>{goals}</p>
      </div>
      
      <div style={{ marginTop: '15px' }}>
        <strong style={{ color: 'var(--accent-orange)' }}>Pain Points:</strong>
        <p style={{ fontSize: '13px', margin: '5px 0' }}>{pains}</p>
      </div>
    </div>
  );
};

export default Persona;