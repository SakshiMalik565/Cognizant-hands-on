import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const postsList = data.map((p) => new Post(p.userId, p.id, p.title, p.body));
        this.setState({ posts: postsList });
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred in Posts component: ' + error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while displaying posts.</h2>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>Blog Posts List</h2>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.slice(0, 10).map((post) => (
            <div key={post.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
              <h3 style={{ color: '#2c3e50' }}>{post.title}</h3>
              <p style={{ color: '#555' }}>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
