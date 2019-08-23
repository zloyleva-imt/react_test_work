import React, {Component} from 'react'
import Col from "react-bootstrap/Col";

import ReviewsList from "./ReviewsList";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faRegStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ReviewsModule extends Component{

    state = {
        indexHoverStar:-1,
    }

    setIndexHoverStar = (index) => {
        console.log("onMouseOver",index)
        this.setState({
            indexHoverStar:index
        })
    }

    clearHoveredStars = () => {
        this.setState({
            indexHoverStar:-1
        })
    }

    render() {
        const {reviews} = this.props;
        const {indexHoverStar} = this.state;
        return (
            <Col xs={6}>
                <h2>Add new review</h2>

                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1" onMouseLeave={this.clearHoveredStars}>
                        {
                            [...Array(5)].map((el,i) => {
                                return (
                                    <FontAwesomeIcon
                                        icon={indexHoverStar>=i?faStar:faRegStar}
                                        onClick={()=>{}}
                                        onMouseOver={()=>{this.setIndexHoverStar(i)}}
                                    />
                                )
                            })
                        }
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Type your reviews..." />
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

export default ReviewsModule;