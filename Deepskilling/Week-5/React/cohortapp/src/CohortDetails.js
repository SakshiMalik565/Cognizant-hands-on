import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const isOngoing = cohort.status.toLowerCase() === 'ongoing';
  const headingStyle = {
    color: isOngoing ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohort.title}</h3>
      <dl>
        <dt>Cohort Code:</dt>
        <dd>{cohort.code}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
