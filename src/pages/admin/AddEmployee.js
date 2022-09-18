import React from "react";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { Card, Col, Row } from "react-bootstrap";
import { TextInput } from "../../components/FormikElements";
import { useRegisterEmployee } from "../../services/admin-service";

export const AddEmployee = () => {
  const onSubmitPress = (values, formik) => {
    addEmployee(values);
    formik.resetForm();
  };
  const { mutate: addEmployee } = useRegisterEmployee();
  return (
    <Row className="mt-4">
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
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
                designation: "",
                hireDate: "",
                salary: "",
              }}
              onSubmit={onSubmitPress}
            >
              <Form>
                <Row className="px-4">
                  <Col md={12} className="mb-4">
                    <h3>Register new employee</h3>
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
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="designation"
                      required
                      className="w-100"
                      variant="outlined"
                      label="Designation"
                      type={"text"}
                    />
                  </Col>
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="hireDate"
                      className="w-100"
                      variant="outlined"
                      label="Hire date"
                      type={"date"}
                      required
                    />
                  </Col>
                  <Col md={4} className="mt-4">
                    <TextInput
                      name="salary"
                      className="w-100"
                      variant="outlined"
                      label="Salary"
                      type={"number"}
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
                  <Col md={2}>
                    <Button
                      variant="contained"
                      type="submit"
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
