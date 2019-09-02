import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import Page from './organism/Page'
import {Registration} from "./organism/Registration";
import {connect} from "react-redux";
import {setToken} from "../actions/registration";

const App = ({ token, setToken }) => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setToken(token)
    }
  })

  if(token){
    return (
        <Page token={token} />
    );
  }
  return (
      <Registration />
  )
}

App.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func.isRequired
}

export default connect(
    state => ({
      token: state.token
    }),
    dispatch => ({
      setToken: token => dispatch(setToken(token))
    })
)(App);
