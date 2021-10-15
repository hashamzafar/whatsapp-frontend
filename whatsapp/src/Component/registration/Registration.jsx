import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./register.css";

const Registration = (props) => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    // avatar: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitInfo = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        username: info.username,
        email: info.email,
        password: info.password,
        // avatar: info.avatar,
      };
      const response = await fetch(
        `https://what-s-app.herokuapp.com/users/account`,
        {
          method: `POST`,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        alert("successfully registered");
        console.log("props", props);
        props.history.push("/");
      } else {
        alert("something wrong bro");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="col-md-8" id='register'>
        <Row>
          <Col md={6}>
            <div id='logoReg'>
              <img
                className='mb-3'
                src="https://logosmarken.com/wp-content/uploads/2020/05/Logo-WhatsApp.png"
                alt="register-logo"
              />
              <h3 id="title" className="ml3">Join to Whatsapp</h3>
            </div>
            <form onSubmit={submitInfo}>
              <div className="form-group">
                <label htmlFor="name">Full Name :</label>
                <input
                  id="username"
                  className="form-control"
                  name="username"
                  type="text"
                  value={info.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"> Email Address :</label>
                <input
                  id="email"
                  className="form-control"
                  name="email"
                  type="email"
                  value={info.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password :</label>
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  value={info.password}
                  onChange={handleChange}
                />
              </div>
              <button id="btn" type="submit" className="btn btn-success my-2 btn-large w-100">
                Register
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default withRouter(Registration);
