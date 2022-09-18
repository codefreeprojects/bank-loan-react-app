import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { SelectInput, TextInput } from "../../components/FormikElements";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import {
  useUserDetails,
  useUserProfile,
} from "../../services/customer.service";

export const EditProfile = () => {
  const {
    mutate: editProfile,
    data: mutaionData,
    isSuccess: isMuSuccess,
  } = useUserProfile();
  const { data, isSuccess, refetch } = useUserDetails();
  const [formInitValues, setFormInitValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    aadharNumber: "",
    role: "CUSTOMER",
  });
  useEffect(() => {
    if (isSuccess)
      setFormInitValues((cur) => ({
        ...cur,
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        aadharNumber: data?.aadharNumber,
      }));
  }, [data]);
  useEffect(() => {
    if (isMuSuccess) refetch();
  }, [mutaionData]);
  const onSubmitPressed = (values) => {
    const userInfo = JSON.parse(
      sessionStorage.getItem("userInformation") || ""
    );
    editProfile({
      userId: userInfo?.user?.id,
      payload: values,
    });
  };
  return (
    <Row className="mt-4">
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <Formik
              initialValues={formInitValues}
              enableReinitialize
              onSubmit={onSubmitPressed}
            >
              <Form>
                <Row className="px-4">
                  <Col md={12} className="mb-4">
                    <h3>Edit Profile</h3>
                  </Col>
                </Row>
                <Row className="px-4">
                  <Col md={6} className="mt-4">
                    <TextInput
                      name="firstName"
                      className="w-100"
                      variant="outlined"
                      label="First Name"
                      type={"text"}
                      required
                    />
                  </Col>
                  <Col md={6} className="mt-4">
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
                      name="email"
                      className="w-100"
                      variant="outlined"
                      label="Email"
                      disabled
                      type={"text"}
                      required
                    />
                  </Col>
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
                  <Col md={12} className="mt-4">
                    <TextInput
                      name="aadharNumber"
                      className="w-100"
                      variant="outlined"
                      label="PAN Number"
                      type={"text"}
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
                      Update Profile
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
