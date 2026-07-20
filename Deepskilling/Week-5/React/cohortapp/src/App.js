import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { title: 'Java FSE Batch 1', code: 'INTADM22DF001', startDate: '2026-06-19', status: 'ongoing' },
    { title: 'DotNet FSE Batch 2', code: 'INTADM22DF002', startDate: '2026-05-10', status: 'completed' },
    { title: 'Python FSE Batch 3', code: 'INTADM22DF003', startDate: '2026-07-01', status: 'ongoing' }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Cognizant Academy Cohorts Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
