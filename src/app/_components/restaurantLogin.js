import { Button, Form } from "react-bootstrap";

const RestaurantLogin = () => {
    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Button type="submit" className="w-100">Login</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default RestaurantLogin;