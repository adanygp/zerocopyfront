import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Alert,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import logo from "../logo.svg";

const Login = ({ changeLogin, isLogin, users, changeUser }) => {
  const INIT_FORM = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(INIT_FORM);
  const [errorLogin, setErrorLogin] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === formData.email &&
        users[i].password === formData.password
      )
        changeUser(users[i]);
        changeLogin(true);
    }
    setErrorLogin("Incorrect Credentials. Try Again");
  };

  if (isLogin === false) {
    return (
      <>
        <Container className="bg-light border mt-5">
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
              <img
                className="m-auto"
                alt="logo"
                src={logo}
                style={{ height: 100, width: 100 }}
              />
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    EMAIL
                  </Label>
                  <Input
                    required
                    id="exampleEmail"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="examplePassword">
                    PASSWORD
                  </Label>
                  <Input
                    required
                    id="examplePassword"
                    name="password"
                    type="password"
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <FormGroup className="text-center m-2">
                  {errorLogin !== false && (
                    <Alert color="danger">{errorLogin}</Alert>
                  )}
                  <Button className="mt-2 w-25">Log In</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  } else {
    return <Navigate to="/home" replace />;
  }
};

export default Login;
