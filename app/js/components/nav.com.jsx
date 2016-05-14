import React from 'react'

import {Link} from 'react-router';

import { Nav, Navbar, NavbarHeader, NavbarBrand, NavbarToggle, NavbarCollapse, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const ACTIVE = { color: 'red' }

const Navigation = React.createClass( {
  getInitialState() {
    return {
      text: ''
    };
  },

  handleChange(e) {

    let obj = {};

    let target = e.target;

    let name = target.getAttribute('name');

    obj[name] = target.value;


    this.setState( obj );
  },

  handleKeyup(e) {
    console.log(e)
  },

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    if(this.state.text == ''){
      return false;
    }


    this.props.onPublishBlog({
      author: this.props.User.username || 'gavin',
      text: this.state.text,
      time: Date.now()
    })

    this.setState({
      text: ''
    })

    return false;
  },

  logout(e) {
    e.preventDefault();
    this.props.onLogout();

    return false;
  },
  render() {

    let username = this.props.User.username;
    let loginBox = [];

    if(username) {
      // <LinkContainer to={ "/users/"+ username } key={1}>
      //         <NavItem eventKey={4}>{username}</NavItem>
      //       </LinkContainer>, <LinkContainer to="/signup" key={2} onClick={this.logout}>
      //         <NavItem eventKey={4}>Sign out</NavItem>
      //       </LinkContainer>,
      loginBox.push(
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown" key={2}>
              <LinkContainer to={ "/users/"+ username }>
                <MenuItem eventKey={3.2}>{username}</MenuItem>
              </LinkContainer>
              <LinkContainer to="/signup" onClick={this.logout}>
                <MenuItem eventKey={3.1}>Sign out</MenuItem>
              </LinkContainer>
            </NavDropdown>)
    } else {
      loginBox.push(<LinkContainer to="/signin" key={1}>
              <NavItem eventKey={1}>Sign in</NavItem>
            </LinkContainer>, <LinkContainer to="/signup" key={2}>
              <NavItem eventKey={4}>Sign up</NavItem>
            </LinkContainer>)
    }
    return (

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">APP!</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            {loginBox}
            
          </Nav>
          <Nav pullRight>
            <Form inline className="navbar-form" onSubmit={this.handleSubmit}>
              <FormGroup bsSize="small">
                <InputGroup bsSize="small">
                  <FormControl type="text" name="text" value={this.state.text} onChange={this.handleChange} onKeyup={this.handleKeyup} />
                  <InputGroup.Addon onClick={this.handleSubmit}>
                    <Glyphicon glyph="send" />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})


export default Navigation;