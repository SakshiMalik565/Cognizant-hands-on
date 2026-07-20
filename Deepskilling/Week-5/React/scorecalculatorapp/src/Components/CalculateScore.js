import React from 'react';
import '../Stylesheets/mystyle.css';

function percentToDecimal(decimal) {
  return (decimal * 100).toFixed(2) + '%';
}

function calcScore(total, goal) {
  return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = calcScore(Total, goal);
  return (
    <div className="score-card">
      <h2>Student Details & Score</h2>
      <div className="field">
        <span>Name:</span> {Name}
      </div>
      <div className="field">
        <span>School:</span> {School}
      </div>
      <div className="field">
        <span>Total Marks:</span> {Total}
      </div>
      <div className="field">
        <span>Goal:</span> {goal}
      </div>
      <div className="field">
        <span>Average Score / Score Percentage:</span> {average}
      </div>
    </div>
  );
};

export default CalculateScore;
