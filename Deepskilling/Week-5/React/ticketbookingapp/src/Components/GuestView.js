import React from 'react';

function GuestView() {
  const flights = [
    { number: 'AI-202', origin: 'Delhi', destination: 'Mumbai', departure: '08:00 AM', price: '₹4,500' },
    { number: '6E-405', origin: 'Bangalore', destination: 'Chennai', departure: '10:30 AM', price: '₹3,200' },
    { number: 'SG-811', origin: 'Kolkata', destination: 'Hyderabad', departure: '02:15 PM', price: '₹5,100' }
  ];

  return (
    <div>
      <h3 style={{ color: '#d9534f' }}>Welcome Guest! Please Login to book tickets.</h3>
      <h4>Available Flight Schedules:</h4>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Flight No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f, i) => (
            <tr key={i}>
              <td>{f.number}</td>
              <td>{f.origin}</td>
              <td>{f.destination}</td>
              <td>{f.departure}</td>
              <td>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestView;
