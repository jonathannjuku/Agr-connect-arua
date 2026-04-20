import React from 'react';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Fresh Roma Tomatoes", price: 45000, unit: "Crate", origin: "Pajulu", img: "🍅" },
    { id: 2, name: "Organic White Onions", price: 12000, unit: "5kg Bag", origin: "Logiri", img: "🧅" },
    { id: 3, name: "Green Bell Peppers", price: 5000, unit: "kg", origin: "Vurra", img: "🫑" },
    { id: 4, name: "Sweet Potatoes", price: 55000, unit: "Sack", origin: "Arua District", img: "🍠" }
  ];

  return (
    <div style={{ marginTop: '40px' }}>
      <h3 style={{ color: 'var(--primary-green)', textAlign: 'left' }}>Marketplace: Direct from West Nile Farms</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '20px',
        marginTop: '20px' 
      }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            background: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <div style={{ background: '#f0f4f0', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              {product.img}
            </div>
            <div style={{ padding: '15px' }}>
              <h4 style={{ margin: '0 0 10px 0' }}>{product.name}</h4>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>Origin: <strong>{product.origin}</strong></p>
              <p style={{ margin: '5px 0', fontSize: '18px', color: 'var(--primary-green)', fontWeight: 'bold' }}>
                {product.price.toLocaleString()} UGX <span style={{ fontSize: '12px', color: '#999' }}>/ {product.unit}</span>
              </p>
              <button style={{ 
                width: '100%', 
                backgroundColor: 'var(--accent-orange)', 
                color: 'white', 
                border: 'none', 
                padding: '10px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: 'bold'
              }}>
                Add to Fresh Box
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;