import { Form, Button, Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./login.css"
const Login = () => (

    <Container>
        <Form id="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H_rpJyIJIUWaHEjQB5jt_EqjMmKTZalG3g&usqp=CAU" alt="" className="mb-5" />

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="success" type="submit" className="my-2 btn-large w-100" >
                Log in
            </Button>
            <Button variant="light" type="submit" className="my-2 btn-large w-100 border" >
                <FcGoogle className="bg-light" /> Log in with google
            </Button>
            <Button variant="primary" type="submit" className="my-2 btn-large w-100" >
                <FaFacebook className="bg-primary" /> Log in with facebook
            </Button>
            <Button variant="primary" type="submit" className="my-2 btn-large w-100" >
                <a href=""> Register</a>
            </Button>
        </Form>
    </Container>


)



export default Login