import React, {Component} from 'react'
import Col from "react-bootstrap/Col";
import _ from 'lodash'

import ReviewsList from "./ReviewsList";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faRegStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import axios from 'axios';
import {connect} from "react-redux";

class ReviewsModule extends Component{

    state = {
        indexHoverStar:-1,
        indexSelectedStar:-1,
        reviews: []
    }

    setIndexHoverStar = (index) => {
        console.log("setIndexHoverStar",index)
        this.setState({
            indexHoverStar:index
        })
    }

    setIndexSelectedStar = (index) => {
        console.log("setIndexSelectedStar",index)
        this.setState({
            indexSelectedStar:index
        })
    }

    clearHoveredStars = () => {
        this.setState({
            indexHoverStar:-1
        })
    }

    submitReviews = (e) => {
        const { token,productId,apiUrl } = this.props;
        const { indexSelectedStar: rate } = this.state
        e.preventDefault();

        axios
            .post(
                `${apiUrl}api/reviews/${productId}`,
                {
                    rate: rate + 1,
                    text: e.target.text.value,
                },
                {
                    headers:{
                        'Authorization': `Token ${token}`
                    }
                }
            )
            .then(res => {
                console.log(res.data)

                axios
                    .get(apiUrl + 'api/reviews/' + productId, {})
                    .then(res => {
                        console.log('res', res.data)
                        this.setState({
                            ...this.state,
                            reviews: res.data
                        });
                    })

            })
            .catch(err => console.log('Error', err))

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const {reviews} = this.props;
        if(!_.isEqual(_.sortBy(reviews), _.sortBy(prevProps.reviews)))
        this.setState({
            reviews:reviews
        })
    }

    render() {
        const {indexHoverStar,indexSelectedStar,reviews} = this.state;
        return (
            <Col xs={6}>
                <h2>Add new review</h2>

                <Form onSubmit={this.submitReviews}>
                    <Form.Group controlId="exampleForm.ControlInput1" onMouseLeave={this.clearHoveredStars}>
                        {
                            [...Array(5)].map((el,i) => {
                                return (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={
                                            indexHoverStar>=i || indexSelectedStar>=i
                                                ?
                                                faStar
                                                :faRegStar
                                        }
                                        onClick={()=>this.setIndexSelectedStar(i)}
                                        onMouseOver={()=>this.setIndexHoverStar(i)}
                                    />
                                )
                            })
                        }
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="text" rows="3" placeholder="Type your reviews..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <h2 className="mt-5">Reviews</h2>
                <ReviewsList reviews={reviews}/>
            </Col>
        )
    }
}

export default connect(
    state => ({
        productId: state.products.selectedProduct.id,
        token: state.auth.token
    })
)(ReviewsModule);