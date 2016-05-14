import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

import Posts from './posts.com';
const Index = React.createClass( {
	componentDidMount() {
		this.props.onGetBlog();
	},
  render() {
  	let blogs = this.props.Blog.blogs;
    return (
      <div>
	      <Jumbotron>
			    <h1>Hello, world!</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><Button bsStyle="primary">Learn more</Button></p>
			  </Jumbotron>

			  <Posts data={blogs} />
	  	</div>
    )
  }
});

export default Index