import React, { useState } from 'react';

function UserView() {
  const [booked, setBooked] = useState(false);

  const handleBook = (flightNo) => {
    alert(`Ticket successfully booked for flight ${flightNo}!`);
    setBooked(true);
  };

  const flights = [
    { number: 'AI-202', origin: 'Delhi', destination: 'Mumbai', departure: '08:00 AM', price: '₹4,500' },
    { number: '6E-405', origin: 'Bangalore', destination: 'Chennai', departure: '10:30 AM', price: '₹3,200' },
    { number: 'SG-811', origin: 'Kolkata', destination: 'Hyderabad', departure: '02:15 PM', price: '₹5,100' }
  ];

  return (
    <div>
      <h3 style={{ color: '#5cb85c' }}>Welcome Registered User! You can now book tickets.</h3>
      <h4>Select a flight to book:</h4>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '700px' }}>
        <thead>
          <tr style={{ backgroundColor: '#e6f2ff' }}>
            <th>Flight No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f, i) => (
            <tr key={i}>
              <td>{f.number}</td>
              <td>{f.origin}</td>
              <td>{f.destination}</td>
              <td>{f.price}</td>
              <td>
                <button
                  onClick={() => handleBook(f.number)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#0275d8',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {booked && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '15px' }}>Your booking is confirmed!</p>}
    </div>
  );
}

export default UserView;
