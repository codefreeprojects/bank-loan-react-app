import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/FormikElements";
import { useLogin } from "../services/login.service";
import Swal from "sweetalert2";
import bankLogo from "../bank_logo-modified.png";

export const Login = () => {
  const navigator = useNavigate();
  const { mutate: login } = useLogin(navigator);

  const onSubmitPress = (values) => {
    login({
      email: values.email,
      password: values.password,
    });
  };
  const onRegisterPressed = () => {
    navigator("/register");
  };
  return (
    <Row className="mt-4">
      <Col md={{ span: 4, offset: 4 }}>
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
                email: "",
                password: "",
              }}
              onSubmit={onSubmitPress}
            >
              <Form>
                <Row className="px-4">
                  <Col md={12} className="mb-4">
                    <h3>Welcome Sir / Mam,</h3>
                  </Col>
                  <Col md={12} className="mt-4">
                    <TextInput
                      name="email"
                      className="w-100"
                      variant="outlined"
                      label="Email"
                      type={"email"}
                      required
                    />
                  </Col>
                  <Col md={12} className="mt-4">
                    <TextInput
                      name="password"
                      className="w-100"
                      variant="outlined"
                      label="Password"
                      required
                      type={"password"}
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
                      Login
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="outlined"
                      onClick={onRegisterPressed}
                      className="w-100  mt-4"
                    >
                      Register
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
