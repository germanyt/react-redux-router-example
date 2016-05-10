import { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/login.com';
import { selectUser } from '../action/app.act';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return state;
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onLogin: (username) => dispatch(selectUser(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);