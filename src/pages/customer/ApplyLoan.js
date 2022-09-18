import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { SelectInput, TextInput } from "../../components/FormikElements";
import {
  useAddNewCustomer,
  useLoansDropdown,
  useUsersDropdown,
} from "../../services/employee.service";

export const genderOptions = [
  {
    key: "MALE",
    value: "MALE",
  },
  {
    key: "FEMALE",
    value: "FEMALE",
  },
  {
    key: "OTHER",
    value: "OTHER",
  },
];

export const ApplyLoan = () => {
  const { mutate: addNewCustomer } = useAddNewCustomer();
  const { data: loansOptions } = useLoansDropdown();

  const onSubmitPress = (values, formik) => {
    const userInfo = JSON.parse(
      sessionStorage.getItem("userInformation") || ""
    );
    addNewCustomer({
      user_id: userInfo?.user?.id,
      ...values,
    });
    formik.resetForm();
  };
  return (
    <Row className="mt-4">
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <Formik
              initialValues={{
                loanId: "",
                panNumber: "",
                education: "",
                occupation: "",
                loanAmount: "",
                monthlyIncome: "",
                guarntorName: "",
                gender: "",
                dob: "",
                age: "",
              }}
              onSubmit={onSubmitPress}
            >
              {(form) => (
                <Form>
                  <Row className="px-4">
                    <Col md={12} className="mb-4">
                      <h3>Apply For Loan</h3>
                      <hr />
                    </Col>
                    <Col md={6} className="mt-4">
                      <SelectInput
                        options={loansOptions || []}
                        name="loanId"
                        className="w-100"
                        variant="outlined"
                        label="Loan Type"
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="panNumber"
                        required
                        className="w-100"
                        variant="outlined"
                        label="PAN Number"
                        type={"text"}
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="education"
                        className="w-100"
                        variant="outlined"
                        label="Education"
                        type={"text"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="occupation"
                        className="w-100"
                        variant="outlined"
                        label="Occupation"
                        type={"text"}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="loanAmount"
                        className="w-100"
                        variant="outlined"
                        label="Loan Amount"
                        type={"number"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="monthlyIncome"
                        className="w-100"
                        variant="outlined"
                        label="Monthly Income"
                        type={"number"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="guarntorName"
                        className="w-100"
                        variant="outlined"
                        label="Guarantor Name"
                        type={"text"}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4} className="mt-4">
                      <SelectInput
                        options={genderOptions}
                        name="gender"
                        className="w-100"
                        variant="outlined"
                        label="Gender"
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="dob"
                        className="w-100"
                        variant="outlined"
                        label="Date of Birth"
                        type={"date"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="age"
                        className="w-100"
                        variant="outlined"
                        label="Age"
                        type={"number"}
                        required
                      />
                    </Col>
                  </Row>

                  <Row className="px-4 mb-4">
                    <Col md={4}>
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
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
