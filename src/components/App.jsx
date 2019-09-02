import React, { Component } from 'react';

import Page from './organism/Page'
import {Registration} from "./organism/Registration";
import {connect} from "react-redux";
import {setToken} from "../actions/registration";

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(token){
      this.props.setToken(token)
    }
  }

  render(){
    const { token } = this.props;
    if(token){
      return (
          <Page token={token} />
      );
    }
    return (
        <Registration />
    )
  }
}

export default connect(
    state => ({
      token: state.token
    }),
    dispatch => ({
      setToken: token => dispatch(setToken(token))
    })
)(App);
