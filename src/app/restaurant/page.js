'use client'
import { useState } from "react";
import "./restaurant.css"
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurentSignup";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import RestaurantHeader from "../_components/restaurantHeader";
import RestaurantFooter from "../_components/restaurantFooter";

const Restaurant = () => {
    const[login, setlogin] = useState(true);
    return(
        <>
            <RestaurantHeader/>
            <Container>
                <h1 className="text-center mb-3">Restaurant Login/Signup Page</h1>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <Card>
                            <Card.Header>
                                <Card.Title className="text-center text-bold">{login? "Login Components":"Signup Components"}</Card.Title>
                            </Card.Header>
                            <Card.Body className="pb-0">
                                {login ? <RestaurantLogin/> : <RestaurantSignup/>}
                            </Card.Body>
                            <Card.Footer className="form-footer d-flex">
                                <Button onClick={() => setlogin(!login)} className="swp-btn">
                                    {login? "Do not have Account? SignUp" :"Already have Account? Login"}
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>   
            </Container>
            <RestaurantFooter/>
        </>
    )
}

export default Restaurant;