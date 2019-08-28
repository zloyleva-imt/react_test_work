import React, { Component } from 'react';

import Page from './organism/Page'
import {Registration} from "./organism/Registration";

class App extends Component {
  state = {
    user: {},
    token: null
  }

  setUsersToken = (token) => {
    this.setState({
      token
    });
    localStorage.setItem('token',token)
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(token){
      this.setState({
        token
      });
    }
  }

  render(){
    const { token } = this.state;
    if(token){
      return (
          <Page token={token} />
      );
    }
    return (
        <Registration setUsersToken={token => this.setUsersToken(token)}/>
    )
  }
}

export default App;
