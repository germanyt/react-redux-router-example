import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

class Posts extends React.Component {
  render() {
  	let list = this.props.data.map(function(item, index){
  		return (
  			<Col md={4} key={index}>
		      	<h2><Link to={ "/users/" + item.author }>{item.author}</Link>说：</h2>
		      	<p><small>{item.time}</small></p>
		      	<p>{item.text}</p>
		      </Col>
		)
  	});
    return (
		  <Grid>
		    <Row className="show-grid">
		      {list}
		    </Row>
		  </Grid>
    )
  }
}

export default Posts