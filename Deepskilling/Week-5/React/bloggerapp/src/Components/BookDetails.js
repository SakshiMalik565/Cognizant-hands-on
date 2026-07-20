import React from 'react';

function BookDetails({ showDetails }) {
  const books = [
    { title: 'React Essentials', author: 'Dan Abramov', price: '$29.99' },
    { title: 'Mastering JavaScript', author: 'Kyle Simpson', price: '$34.99' },
    { title: 'Spring Boot in Action', author: 'Craig Walls', price: '$39.99' }
  ];

  // Conditional rendering technique 1: Logical && operator
  return (
    <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #17a2b8', borderRadius: '6px' }}>
      <h3>Book Details Section</h3>
      {showDetails && (
        <ul>
          {books.map((b, i) => (
            <li key={i}>
              <strong>{b.title}</strong> by {b.author} - {b.price}
            </li>
          ))}
        </ul>
      )}
      {!showDetails && <p><em>Book details are currently hidden.</em></p>}
    </div>
  );
}

export default BookDetails;
