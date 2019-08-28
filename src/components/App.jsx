import React, { Component } from 'react';

import Page from './organism/Page'
import {Registration} from "./organism/Registration";

class App extends Component {
  state = {
    user: {},
    token: null
  }

  render(){
    const { token } = this.state;
    if(token){
      return (
          <Page />
      );
    }
    return (
      <Registration />
    )
  }
}

export default App;
