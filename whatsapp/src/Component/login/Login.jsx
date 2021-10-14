import { Form, Button, Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "./login.css"
import { Link } from "react-router-dom"
import { useState } from "react"


const Login = (props) => {
    const [login, setLogin] = useState("")
    const [loginValidation, setLoginValidation] = useState(false)
    const [isTransitionPage, setTransitionPage] = useState(false)

    const handleForm = (key, value) => {
        setLogin({
            ...login,
            [key]: value,
        })
    }

    const getUserToken = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(
                "https://what-s-app.herokuapp.com/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(login),
                }
            )
            if (response.ok) {
                let userToken = await response.json()
                console.log(userToken)
                window.localStorage.setItem("Token", userToken.accessToken)
                getUserData()
            } else {
                setLoginValidation(true)
            }
        } catch (err) {
            setLoginValidation(true)
            console.log(err)
            return err
        }
    }

    const getUserData = async () => {
        let userToken = "Bearer " + window.localStorage.getItem('Token')
        console.log("token123", userToken)
        try {
            let response = await fetch('https://what-s-app.herokuapp.com/users', {
                method: 'Get',
                headers: {
                    "Authorization": userToken,
                },

            })
            if (response.ok) {
                let userData = await response.json()
                if (userData.name === undefined) {
                    setLoginValidation(true)
                    return
                }
                setTransitionPage(true)
                let userDataKeyList = Object.keys(userData)
                userDataKeyList.forEach(key => window.localStorage.setItem(key, userData[key]))
                props.history.push('transitionPage')
            } else {
                setLoginValidation(true)
            }

        } catch (e) {
            console.log(e)
            return e

        }
    }
    return (
        <Container>
            <div className="margin">
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-icon-vector-PNG.png" width="300" height="300" alt="" />
                <h3 id="title">Welcome to Whatsapp</h3>
            </div>
            <div >
                <main className="container-fluid">
                    {
                        loginValidation && (
                            <div className="container d-flex justify-content-center">
                                <p className="text-danger">
                                    <strong>Sorry incorrect username/password :(</strong>
                                </p>
                            </div>
                        )
                    }

                    <div className="container d-flex flex-column mod-logo-maxWidth">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputUsername">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="usernameHelp"
                                    onChange={(e) => {
                                        handleForm("email", e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => {
                                        handleForm("password", e.target.value)
                                    }}
                                />
                            </div>
                            <div className="container d-flex justify-content-between align-items-center pl-4 pr-0">
                                <div className="form-group form-check d-flex align-items-center m-0 p-0">
                                    <input
                                        type="checkbox"
                                        className="form-check-input my-auto"
                                        id="exampleCheck1"
                                    />
                                    <label className="form-check-label" for="exampleCheck1">
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    to="/main"
                                    id="login-btn"
                                    className="btn btn-success"
                                    onClick={(e) => getUserToken(e)}
                                >
                                    Log in
                                </Link>

                            </div>
                        </form>

                        <p c className="my-2 btn btn-large w-100" id="btn">
                            <span>
                                <a href="#">Forgot your password?</a>
                            </span>
                        </p>
                    </div>
                    <div className="container d-flex flex-column justify-content-center align-items-center mod-logo-maxWidth">
                        <h5 className="mb-4">Don't have an account?</h5>
                        <Form>

                            <Button variant="primary" type="submit" className="my-2 btn-large w-100 btn" id="btn" >
                                <Link to="/register" className="link"> Register</Link>
                            </Button>
                            <div className="container mt-4 mb-3 d-flex justify-content-center align-items-center mod-logo-maxWidth p-3">
                                <div className="section-line"></div>
                                <span className="mx-3 orModtranslate">or</span>
                                <div className="section-line"></div>
                            </div>
                            <a href="http://google.com" target="_blank" >
                                <Button variant="light" type="submit" className="my-2 btn btn-large w-100 border" id="btn">
                                    <FcGoogle className="bg-light" /> Log in with google
                                </Button></a>
                            <Button variant="primary" type="submit" className="my-2 btn btn-large w-100" id="btn" >
                                <FaFacebook className="bg-primary" /> Log in with facebook
                            </Button>
                        </Form>
                    </div>

                    <div className="container mod-logo-maxWidth mt-4">
                        <p className="text-center login">
                            If you click "Log in with Facebook" and are not a Whatsapp user, you
                            will be registered and you agree to Whatsapp's{" "}
                            <span>
                                <a href="#">Terms & Conditions</a>
                            </span>{" "}
                            and{" "}
                            <span>
                                <a href="#">Privacy Policy.</a>
                            </span>
                        </p>
                    </div>
                </main >
            </div >
        </Container>


    )
}




export default Login
