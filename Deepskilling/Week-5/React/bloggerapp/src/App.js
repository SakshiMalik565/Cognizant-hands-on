import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [blogCount, setBlogCount] = useState(3);
  const [courseStatus, setCourseStatus] = useState('available');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px' }}>
      <h2>Cognizant Tech Blogger Application</h2>
      <p style={{ color: '#66c' }}>Demonstration of multiple Conditional Rendering techniques in React</p>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <button onClick={() => setShowBooks(!showBooks)}>
          Toggle Books ({showBooks ? 'Hide' : 'Show'})
        </button>
        <button onClick={() => setBlogCount(blogCount === 0 ? 3 : 0)}>
          Toggle Blogs ({blogCount > 0 ? 'Clear' : 'Load'})
        </button>
        <button onClick={() => setCourseStatus(courseStatus === 'available' ? 'upcoming' : 'available')}>
          Switch Course Status (Current: {courseStatus})
        </button>
      </div>

      <BookDetails showDetails={showBooks} />
      <BlogDetails blogCount={blogCount} />
      <CourseDetails status={courseStatus} />
    </div>
  );
}

export default App;
