import React, { useState } from "react";
import Header from "../components/header";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Home = ({ user }) => {
  const [authBalance, setAuthBalancer] = useState(false);
  const [errorBalance, setErrorBalance] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const INIT_FORM = {
    id: user._id,
    age: user.age,
    eyeColor: user.eyeColor,
    company: user.company,
    phone: user.phone,
    address: user.address,
  };
  const [formData, setFormData] = useState(INIT_FORM);

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBalance = () => {
    user.isActive === true
      ? setAuthBalancer(true)
      : setErrorBalance("unauthorized user");
  };

  const handleSubmit = async (e) => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(
      "http://localhost:5000/editUser",
      requestOptions
    );
    const data = await response.json();
  };
  return (
    <>
      <Header />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <Form>
            <Row className="justify-content-center">
              {/* <Col sm={6}>
              <FormGroup className="text-start m-2">
                <Label className="text-black" for="exampleEmail">
                  First Name
                </Label>
                <Input type="text" value={user.name.first} onChange={(e) => handleChange("password", e.target.value)} />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup className="text-start m-2">
                <Label className="text-black" for="exampleEmail">
                  Last Name
                </Label>
                <Input type="text" value={user.name.last} />
              </FormGroup>
            </Col> */}
              <Col sm={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    Age
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    Eye Color
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.eyeColor}
                    onChange={(e) => handleChange("eyeColor", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    Company
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    Phone
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col sm={12}>
                <FormGroup className="text-start m-2">
                  <Label className="text-black" for="exampleEmail">
                    address
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Edit User
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Container className="bg-light border mt-5">
        <Row className="justify-content-center">
          <Col sm={12} className="text-center mt-2">
            <img
              alt="logo"
              src={user.picture}
              style={{ height: 100, width: 100 }}
            />
          </Col>
          <Col sm={6} className="text-center d-flex justify-content-around">
            <Button className="mt-2 w-50" onClick={() => handleBalance()}>
              BALANCE
            </Button>
          </Col>

          <Col sm={6} className="text-center d-flex justify-content-around">
            <Button className="mt-2 w-50" onClick={toggle}>
              EDIT
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12}>
            <FormGroup className="text-start m-2">
              {errorBalance !== false && (
                <Alert color="warning">{errorBalance}</Alert>
              )}
              <Label className="text-black" for="exampleEmail">
                balance
              </Label>
              <Input
                disabled={true}
                type="text"
                value={authBalance === true ? user.balance : "$******"}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                First Name
              </Label>
              <Input disabled={true} type="text" value={user.name.first} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                Last Name
              </Label>
              <Input disabled={true} type="text" value={user.name.last} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                Age
              </Label>
              <Input disabled={true} type="text" value={user.age} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                Eye Color
              </Label>
              <Input disabled={true} type="text" value={user.eyeColor} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                Company
              </Label>
              <Input disabled={true} type="text" value={user.company} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                Phone
              </Label>
              <Input disabled={true} type="text" value={user.phone} />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="text-start m-2">
              <Label className="text-black" for="exampleEmail">
                address
              </Label>
              <Input disabled={true} type="text" value={user.address} />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
