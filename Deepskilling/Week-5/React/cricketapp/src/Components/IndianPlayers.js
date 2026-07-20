import React from 'react';

function IndianPlayers() {
  const teamList = [
    'Sachin Tendulkar',
    'Virat Kohli',
    'Rohit Sharma',
    'MS Dhoni',
    'Rahul Dravid',
    'VVS Laxman'
  ];

  // ES6 Destructuring
  const [first, second, third, fourth, fifth, sixth] = teamList;
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // Merge feature using spread operator
  const T20players = ['KL Rahul', 'Rishabh Pant', 'Suryakumar Yadav'];
  const RanjiTrophy = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Mayank Agarwal'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h3>Indian Players Team Breakdown</h3>
      <h4>Odd Position Team Players (1st, 3rd, 5th):</h4>
      <ul>
        {oddTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h4>Even Position Team Players (2nd, 4th, 6th):</h4>
      <ul>
        {evenTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h4>Merged Squad (T20 & Ranji Trophy Players):</h4>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
