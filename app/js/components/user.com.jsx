import React from 'react'

import Posts from './posts.com'

class User extends React.Component {
  render() {
    let blogs = this.props.Blog.blogs;

    let username = this.props.params.id || 'gavin';

    let userMap = this.props.Blog.userMap[username];

    let data = [];

    if(userMap && userMap.length) {
      data = userMap.map(function(blogId){
        return blogs[blogId];
      })
    }
    return (
      <div>
        <div className="page-header">
          <h2>{this.props.params.id}</h2>
        </div>

        <Posts data={data}/>
      </div>
    )
  }
}

export default User