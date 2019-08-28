import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';

class Registration extends Component{

    state = {
        username: '',
        password: '',
        loginUrl: 'http://smktesting.herokuapp.com/api/register/'
    }

    submitRegistration = (e) => {
        e.preventDefault()
        const { username, password, loginUrl } = this.state;

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


            })

    }

    onChangeInput = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
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

export { Registration }