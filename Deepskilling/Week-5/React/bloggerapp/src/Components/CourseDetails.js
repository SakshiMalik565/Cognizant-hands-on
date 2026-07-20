import React from 'react';

function CourseDetails({ status }) {
  const courses = [
    { name: 'Java FSE Deepskilling', duration: '7 Weeks' },
    { name: 'React Development Mastery', duration: '4 Weeks' },
    { name: 'Cloud & GenAI Fundamentals', duration: '2 Weeks' }
  ];

  // Conditional rendering technique 3: Element Variable with switch / if-else
  let content;
  if (status === 'available') {
    content = (
      <ul>
        {courses.map((c, i) => (
          <li key={i}>
            <strong>{c.name}</strong> - Duration: {c.duration}
          </li>
        ))}
      </ul>
    );
  } else if (status === 'upcoming') {
    content = <p><em>New courses coming soon next week!</em></p>;
  } else {
    content = <p>No course information selected.</p>;
  }

  return (
    <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ffc107', borderRadius: '6px' }}>
      <h3>Course Details Section</h3>
      {content}
    </div>
  );
}

export default CourseDetails;
