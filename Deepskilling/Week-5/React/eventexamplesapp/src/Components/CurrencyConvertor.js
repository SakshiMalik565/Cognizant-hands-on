import React, { useState } from 'react';

function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inrValue = parseFloat(inr);
    if (!isNaN(inrValue)) {
      // 1 EUR approx 90 INR
      const converted = (inrValue / 90).toFixed(2);
      setEuro(converted);
    } else {
      alert('Please enter a valid INR amount');
    }
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #007bff', borderRadius: '8px', width: '350px' }}>
      <h3>Currency Convertor (INR to Euro)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Amount in INR: </label>
          <input
            type="number"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            style={{ padding: '6px', width: '100%', marginTop: '5px' }}
            placeholder="Enter INR"
          />
        </div>
        <button
          type="submit"
          style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Convert
        </button>
      </form>
      {euro !== null && (
        <h4 style={{ color: '#2c3e50', marginTop: '15px' }}>
          Equivalent Euro: €{euro}
        </h4>
      )}
    </div>
  );
}

export default CurrencyConvertor;
