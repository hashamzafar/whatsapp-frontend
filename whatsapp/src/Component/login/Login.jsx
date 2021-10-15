import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://what-s-app.herokuapp.com/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }
      );
      if (response.ok) {
        alert("LOGIN!!!!");
        props.history.push("/main");
        const res = await response.json();
        window.localStorage.setItem("Token", res.accessToken);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   },[])

  return (
    <Container id='login'>
      <Row>
        <Col md={6}>
          <div id='logo'>
            <img
              src="https://logosmarken.com/wp-content/uploads/2020/05/Logo-WhatsApp.png"
              alt="Whatsapp-Logo"
            />
            <h3 id="title">Welcome to Whatsapp</h3>
          </div>
          <Form onSubmit={submitLogin}>

            <div className="form-group">
              <label htmlFor="email"> Email Address :</label>
              <input
                id="email"
                className="form-control"
                name="email"
                type="email"
                value={login.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="my-2 btn btn-large w-100"
              id="btn"
            >
              {/* <Link to="/main" className="link">
            {" "} */}
              Log in
              {/* </Link> */}
            </Button>
            <a href="http://google.com" target="_blank">
              <Button
                variant="light"
                type="submit"
                className="my-2 btn btn-large w-100 border"
                id="btn"
              >
                <FcGoogle className="bg-light" /> Log in with google
              </Button>
            </a>
            <Button
              variant="primary"
              type="submit"
              className="my-2 btn btn-large w-100"
              id="btn"
            >
              <FaFacebook className="bg-primary" /> Log in with facebook
            </Button>

            <Button
              variant="primary"
              type="submit"
              className="my-2 btn-large w-100 btn"
              id="btn"
            >
              <Link to="/register" className="link">
                {" "}
                Register
              </Link>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Login);
