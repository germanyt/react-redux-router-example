import React from 'react';

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Button } from 'react-bootstrap'

const Login = React.createClass( {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: '',
      password: ''
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

    let userList = this.props.User.list;
    let username = this.state.username;

    if(username && userList[username]) {
      let userInfo = userList[username];

      if(userInfo.password == this.state.password){
        this.props.onLogin(username);
        this.context.router.replace('/');
      } else {
        console.log('password error');
      }
    } else {
      console.log('user no')
    }
  	return false;
  },

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <fildset>
          <legend>SIGN IN</legend>
        </fildset>
        <FormGroup controlId="formControlsText" validationState={this.getValidationState('username')}>
		      <Col componentClass={ControlLabel} sm={2}>Username</Col>
	      	<Col sm={10}>
			      <FormControl type="text" name="username" onChange={this.handleChange} placeholder="Enter text" value={this.state.username} />
			    </Col>
		    </FormGroup>
        <FormGroup controlId="formControlsPassword" validationState={this.getValidationState('password')}>
		      <Col componentClass={ControlLabel} sm={2}>Password</Col>
	      	<Col sm={10}>
			      <FormControl type="password" name="password" onChange={this.handleChange} placeholder="Enter password" value={this.state.password} />
			    </Col>
		    </FormGroup>
		    <FormGroup>
		      <Col smOffset={2} sm={10}>
		        <Button type="submit">
		          Sign in
		        </Button>
		      </Col>
		    </FormGroup>
      </Form>
    );
  }
})


export default Login;