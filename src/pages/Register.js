import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/FormikElements";
import { useRegister } from "../services/login.service";
import bankLogo from "../bank_logo-modified.png";
export const Register = () => {
  const navigator = useNavigate();
  const { mutate: register } = useRegister(navigator);
  const onSubmitPress = (values) => {
    register({ ...values, role: "CUSTOMER" });
  };
  const onLoginPressed = (values) => {
    navigator("/");
  };
  return (
    <Row className="mt-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Img
            height={250}
            width={250}
            className="img_logo"
            variant="top"
            src={bankLogo}
          />
          <Card.Body>
            <Formik
              initialValues={{
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                securityAns: "",
                securityQue: "",
                contactNumber: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={onSubmitPress}
            >
              <Form>
                <Row className="px-4">
                  <Col md={12} className="mb-4">
                    <h3>Register here Sir / Mam,</h3>
                  </Col>
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="firstName"
                      required
                      className="w-100"
                      variant="outlined"
                      label="First Name"
                      type={"text"}
                    />
                  </Col>
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="middleName"
                      className="w-100"
                      variant="outlined"
                      label="Middle Name"
                      type={"text"}
                      required
                    />
                  </Col>
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="lastName"
                      className="w-100"
                      variant="outlined"
                      label="Last Name"
                      type={"text"}
                      required
                    />
                  </Col>
                </Row>
                <Row className="px-4">
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="securityQue"
                      className="w-100"
                      variant="outlined"
                      label="Security Que"
                      type={"text"}
                      required
                    />
                  </Col>
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="securityAns"
                      className="w-100"
                      variant="outlined"
                      label="Que Answer"
                      type={"text"}
                      required
                    />
                  </Col>
                </Row>
                <Row className="px-4">
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="email"
                      className="w-100"
                      variant="outlined"
                      label="Email"
                      type={"email"}
                      required
                    />
                  </Col>
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="contactNumber"
                      className="w-100"
                      variant="outlined"
                      label="Contact Number"
                      type={"number"}
                      required
                    />
                  </Col>
                </Row>
                <Row className="px-4">
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="password"
                      className="w-100"
                      variant="outlined"
                      label="Password"
                      type={"password"}
                      required
                    />
                  </Col>
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="confirmPassword"
                      className="w-100"
                      variant="outlined"
                      label="Confirm Password"
                      type={"password"}
                      required
                    />
                  </Col>
                </Row>
                <Row className="px-4 mb-4">
                  <Col md={6}>
                    <Button
                      variant="contained"
                      type="submit"
                      className="w-100  mt-4"
                    >
                      Register
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="outlined"
                      onClick={onLoginPressed}
                      className="w-100  mt-4"
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
