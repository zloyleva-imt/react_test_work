import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';
import {connect} from "react-redux";

class Registration extends Component{

    state = {
        username: '',
        password: '',
    }

    submitRegistration = (e) => {
        const { setUsersToken,loginUrl,setToken } = this.props;
        e.preventDefault()
        const { username, password } = this.state;

        axios
            .post(
                loginUrl,
                {
                        username,
                        password
                    }
                )
            .then(res => {
                console.log('submitRegistration',res.data)
                if(res.data.success === true){
                    setUsersToken(res.data.token)
                    setToken(res.data.token)
                }

            })

    }

    onChangeInput = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        console.log(this.props)

        return (
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs={6}>

                        <Form onSubmit={this.submitRegistration}>
                            <Form.Group controlId="formBasicUserName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="username" onChange={(e) => this.onChangeInput(e)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={(e) => this.onChangeInput(e)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        )
    }
}

Registration.propTypes = {
    setUsersToken: PropTypes.func
}

const  mapStateToProps = state => ({
    loginUrl: state.links.loginUrl
})

const mapDispatchToProps = dispatch => ({
    setToken: token => dispatch({type:"SET_TOKEN", payload: token})
})

const x = connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration)

export { x as Registration }