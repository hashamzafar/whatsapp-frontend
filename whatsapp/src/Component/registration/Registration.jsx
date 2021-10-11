import { Formik, Field, Form } from "formik"
import { Container } from "react-bootstrap"

const Registration = () => {
    const onSubmit = (values, actions) => {
        console.log(values)
        createUser(values)
    }

    const createUser = async (values) => {
        console.log("inside create user")

        try {
            let response = await fetch(
                "",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            )
            if (response.ok) {
                alert("USER SAVED!")
                let dataRequested = await response.json()
                console.log(dataRequested)
                window.localStorage.setItem("user_Token", dataRequested.access_token)
            } else {
                alert("User not created")
            }
        } catch (e) {
            return e
        }
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{
                name: "",
                email: "",
                url: "",
                password: "",

            }}
        >
            {(props) => (
                <Container className="col-md-8">
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">

                                Full Name :
                            </label>
                            <Field
                                id="name"
                                className="form-control"
                                name="name"
                                type="text"
                            />
                        </div>

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
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
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


                        <div className="form-group">
                            <label htmlFor="username">

                                Picture url :
                            </label>
                            <Field
                                id="url"
                                className="form-control"
                                name="url"
                                type="url"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success my-2 btn-large w-100"
                        >
                            Register
                        </button>
                    </Form>
                </Container>
            )}
        </Formik>
    )
}
export default Registration