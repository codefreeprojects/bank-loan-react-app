import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { SelectInput, TextInput } from "../../components/FormikElements";
import { useAddLoanType, useViewAllLoans } from "../../services/admin-service";
const loanTypes = [
  { key: "PERSONAL_LOAN", value: "PERSONAL_LOAN" },
  { key: "HOME_LOAN", value: "HOME_LOAN" },
  { key: "CAR_LOAN", value: "CAR_LOAN" },
  { key: "BIKE_LOAN", value: "BIKE_LOAN" },
  { key: "GOLD_LOAN", value: "GOLD_LOAN" },
  { key: "EDUCATION_LOAN", value: "EDUCATION_LOAN" },
];
export const AddLoanType = () => {
  const {
    refetch,
    data: allLoans,
    isSuccess: isLoanDataAvailable,
  } = useViewAllLoans();
  const { mutate: addLoanType, data, isSuccess } = useAddLoanType();

  const addLoan = (values, form) => {
    addLoanType(values);
    form.resetForm();
  };

  useEffect(() => {
    if (isSuccess) refetch();
  }, [data]);

  return (
    <>
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Formik
                initialValues={{
                  loanType: "",
                  duration: "",
                  rate: "",
                  processingFee: "",
                }}
                onSubmit={addLoan}
              >
                <Form>
                  <Row className="px-4">
                    <Col md={12} className="mb-4">
                      <h3>Add / Update loan type..</h3>
                    </Col>
                    <Col md={6} className="mt-4">
                      <SelectInput
                        options={loanTypes}
                        name="loanType"
                        className="w-100"
                        variant="outlined"
                        label="Loan Type"
                        type={"text"}
                        required
                      />
                    </Col>
                    <Col md={6} className="mt-4">
                      <TextInput
                        name="duration"
                        className="w-100"
                        variant="outlined"
                        label="Duration (In Month)"
                        type={"number"}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={6} className="mt-4">
                      <TextInput
                        name="rate"
                        className="w-100"
                        variant="outlined"
                        label="Rate %"
                        type={"number"}
                        required
                      />
                    </Col>
                    <Col md={6} className="mt-4">
                      <TextInput
                        name="processingFee"
                        className="w-100"
                        variant="outlined"
                        label="Processing Fee"
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
                        Add Loan Type
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Available loans</h3>
              <Table className="mt-4" striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Loan Type</th>
                    <th>Rate</th>
                    <th>Duration</th>
                    <th>Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoanDataAvailable &&
                    allLoans?.map((loan, index) => (
                      <tr key={loan.loanType}>
                        <td>{index + 1}</td>
                        <td>{loan.loanType}</td>
                        <td>{loan.rate}</td>
                        <td>{loan.duration} Months</td>
                        <td>{loan.processingFee}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
