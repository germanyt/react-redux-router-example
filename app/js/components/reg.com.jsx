import React from 'react';
import { History } from 'react-router';

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Button } from 'react-bootstrap';

const Reg = React.createClass( {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: '',
      password: '',
      'password-repeat': ''
    };
  },

  getValidationState(key) {
    const length = this.state[key].length;
    if (length > 5) return 'success';
    else if (length > 0) return 'error';
  },

  handleChange(e) {

  	let obj = {};

  	let target = e.target;

  	let name = target.getAttribute('name');

  	obj[name] = target.value;


    this.setState( obj );
  },

  handleSubmit(e) {
    e.preventDefault();
  	console.log(this.state);

    let username = this.state.username;

    if(this.props.User.list[username]){
      console.log('user exit');
      return false;
    }

    this.props.onAddUser({
      username: username,
      password: this.state.password
    })


    this.context.router.replace('/signin')
  	return false;
  },

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <fildset>
          <legend>SIGN UP</legend>
        </fildset>
        <FormGroup controlId="formControlsText" validationState={this.getValidationState('username')}>
		      <Col componentClass={ControlLabel} sm={2}>Username</Col>
	      	<Col sm={10}>
			      <FormControl type="text" name="username" onChange={this.handleChange} placeholder="Enter text" value={this.state.username} />
			      <HelpBlock>Username is that for sign in and show.</HelpBlock>
			    </Col>
		    </FormGroup>
        <FormGroup controlId="formControlsPassword" validationState={this.getValidationState('password')}>
		      <Col componentClass={ControlLabel} sm={2}>Password</Col>
	      	<Col sm={10}>
			      <FormControl type="password" name="password" onChange={this.handleChange} placeholder="Enter password" value={this.state.password} />
			    </Col>
		    </FormGroup>
        <FormGroup controlId="formControlsPasswordRepeat" validationState={this.getValidationState('password-repeat')}>
		      <Col componentClass={ControlLabel} sm={2}>Repeat Password</Col>
	      	<Col sm={10}>
			      <FormControl type="password" name="password-repeat" onChange={this.handleChange} placeholder="Enter password" value={this.state['password-repeat']} />
			    </Col>
		    </FormGroup>
		    <FormGroup>
		      <Col smOffset={2} sm={10}>
		        <Button type="submit">
		          Sign up
		        </Button>
		      </Col>
		    </FormGroup>
      </Form>
    );
  }
})


export default Reg;