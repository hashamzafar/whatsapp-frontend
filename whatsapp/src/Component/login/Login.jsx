import { Form, Button, Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./login.css"
import { Link } from "react-router-dom"
import { Formik, Field } from "formik"

const Login = () => (

    <Formik

        initialValues={{
            email: "",
            password: "",

        }}
    >
        <Container>
            <Form id="login">
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-icon-vector-PNG.png" width="300" height="300" alt="" />
                <h3 id="title">Welcome to Whatsapp</h3>

                <div className="form-group">
                    <label htmlFor="email">
                        {" "}

                        Email Address :
                    </label>
                    <Field
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </div>
                <div className="form-group">
                    <label >
                        {" "}

                        Password :
                    </label>
                    <Field
                        id="password"
                        className="form-control"
                        name="password"
                        type="password"
                    />
                </div>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="success" type="submit" className="my-2 btn btn-large w-100" id="btn">
                    <Link to="/main" className="link">Log in</Link>
                </Button>
                <Button variant="light" type="submit" className="my-2 btn btn-large w-100 border" id="btn">
                    <FcGoogle className="bg-light" /> Log in with google
                </Button>
                <Button variant="primary" type="submit" className="my-2 btn btn-large w-100" id="btn" >
                    <FaFacebook className="bg-primary" /> Log in with facebook
                </Button>
                <Button variant="primary" type="submit" className="my-2 btn-large w-100 btn" id="btn" >
                    <Link to="/register" className="link"> Register</Link>
                </Button>
            </Form>
        </Container>
    </Formik>


)



export default Login