import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Sachin Tendulkar', score: 95 },
    { name: 'Virat Kohli', score: 88 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'MS Dhoni', score: 75 },
    { name: 'Rahul Dravid', score: 55 },
    { name: 'VVS Laxman', score: 68 },
    { name: 'Yuvraj Singh', score: 82 },
    { name: 'Suresh Raina', score: 45 },
    { name: 'Shikhar Dhawan', score: 72 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Jasprit Bumrah', score: 30 }
  ];

  // Map ES6 feature
  const allPlayers = players.map((player, index) => (
    <li key={index}>
      Mr. {player.name} <span>- Score: {player.score}</span>
    </li>
  ));

  // Filter ES6 feature (players with scores below 70)
  const lowScoringPlayers = players
    .filter((player) => player.score < 70)
    .map((player, index) => (
      <li key={index}>
        Mr. {player.name} <span>- Score: {player.score}</span>
      </li>
    ));

  return (
    <div>
      <h3>List of Players</h3>
      <ul>{allPlayers}</ul>
      <h3>List of Players having score less than 70</h3>
      <ul>{lowScoringPlayers}</ul>
    </div>
  );
}

export default ListofPlayers;
