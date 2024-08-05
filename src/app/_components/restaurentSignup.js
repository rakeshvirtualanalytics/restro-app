import { Button, Form } from "react-bootstrap";

const RestaurantSignup = () => {
    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Email Id</Form.Label> */}
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    {/* <Form.Label>Enter Password</Form.Label> */}
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter restaurant Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter mobile no" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter full address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Button type="submit" className="w-100">SignUp</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default RestaurantSignup;