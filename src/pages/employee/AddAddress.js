import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { SelectInput, TextInput } from "../../components/FormikElements";
import {
  useAddAddress,
  useUsersDropdown,
} from "../../services/employee.service";

export const AddAddress = () => {
  const { data: usersOptions } = useUsersDropdown();
  const { mutate: addAddress } = useAddAddress();
  const onSubmitPress = (values, formik) => {
    const { user_id, ...payload } = values;
    addAddress({
      userId: user_id,
      payload: payload,
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
                houseNumber: "",
                street: "",
                landmark: "",
                city: "",
                state: "",
                country: "",
                pinCode: "",
                user_id: "",
              }}
              onSubmit={onSubmitPress}
            >
              {(form) => (
                <Form>
                  <Row className="px-4">
                    <Col md={12} className="mb-4">
                      <h3>Add address to user</h3>
                      <hr />
                    </Col>
                    <Col md={12} className="mt-4">
                      <SelectInput
                        options={usersOptions || []}
                        name="user_id"
                        required
                        className="w-100"
                        variant="outlined"
                        label="User"
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="houseNumber"
                        required
                        className="w-100"
                        variant="outlined"
                        label="House Number"
                        type={"text"}
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="street"
                        className="w-100"
                        variant="outlined"
                        label="Street"
                        type={"text"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="landmark"
                        className="w-100"
                        variant="outlined"
                        label="Landmark"
                        type={"text"}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="country"
                        required
                        className="w-100"
                        variant="outlined"
                        label="Country"
                        type={"text"}
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="state"
                        className="w-100"
                        variant="outlined"
                        label="State"
                        type={"text"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="city"
                        className="w-100"
                        variant="outlined"
                        label="City"
                        type={"text"}
                        required
                      />
                    </Col>
                    <Col md={4} className="mt-4">
                      <TextInput
                        name="pinCode"
                        className="w-100"
                        variant="outlined"
                        label="Pin Code"
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
                        Add address
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
