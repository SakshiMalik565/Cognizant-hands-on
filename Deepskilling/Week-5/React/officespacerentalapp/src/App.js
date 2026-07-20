import React from 'react';

function App() {
  const pageHeading = <h1>Office Space Rental At Affordable Rates</h1>;

  const officeList = [
    {
      name: 'DBS Office Space',
      rent: 50000,
      address: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
    },
    {
      name: 'Executive Tech Park',
      rent: 65000,
      address: 'Bangalore, Karnataka',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400'
    },
    {
      name: 'Cognizant Innovation Hub',
      rent: 75000,
      address: 'Hyderabad, Telangana',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400'
    },
    {
      name: 'StartUp Hub Studio',
      rent: 45000,
      address: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {pageHeading}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {officeList.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                width: '300px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={office.image}
                alt={office.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3>{office.name}</h3>
              <p>
                <strong>Rent: </strong>
                <span style={rentStyle}>₹{office.rent.toLocaleString()} / month</span>
              </p>
              <p>
                <strong>Address: </strong>
                {office.address}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
