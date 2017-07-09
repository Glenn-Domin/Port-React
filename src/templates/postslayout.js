import React, { Component } from 'react';

import PostsIndex from '../components/posts_index';

class DBLayout extends Component {
  render() {
    return (<div>
        <div className="intro-component">
          <h1>CSS Loaders are Awesome</h1>
        </div>
        <PostsIndex />
      </div>);
  }
}

export default DBLayout;