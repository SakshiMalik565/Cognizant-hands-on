import React from 'react';

function BlogDetails({ blogCount }) {
  const blogs = [
    { title: 'Understanding React State Management', date: '2026-07-10' },
    { title: 'Building Microservices with Spring Boot 3', date: '2026-07-05' },
    { title: 'CSS Modules vs Styled Components', date: '2026-06-28' }
  ];

  // Conditional rendering technique 2: Ternary Operator
  return (
    <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #28a745', borderRadius: '6px' }}>
      <h3>Blog Details Section</h3>
      {blogCount > 0 ? (
        <ul>
          {blogs.slice(0, blogCount).map((blog, i) => (
            <li key={i}>
              <strong>{blog.title}</strong> (Published: {blog.date})
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available to display.</p>
      )}
    </div>
  );
}

export default BlogDetails;
