import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { SelectInput, TextInput } from "../../components/FormikElements";
import {
  useCustomersDropdown,
  useMakePayment,
  useViewEmiList,
} from "../../services/employee.service";

export const MakePayment = () => {
  const { data: customersOptions } = useCustomersDropdown();

  const { data, isSuccess, mutate: getEmiList } = useViewEmiList();
  const { mutate: makePay } = useMakePayment();
  const searchEmi = (values) => {
    getEmiList(values.customerId);
  };

  const makePayment = (emiId, customerId) => {
    makePay({
      emiId: emiId,
      custId: customerId,
    });
  };

  return (
    <>
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Formik
                initialValues={{
                  customerId: "",
                }}
                onSubmit={searchEmi}
              >
                <Form>
                  <Row className="px-4">
                    <Col md={12} className="mb-4">
                      <h3>Make Payment</h3>
                      <hr />
                    </Col>
                    <Col md={8} className="mt-4">
                      <SelectInput
                        options={customersOptions || []}
                        name="customerId"
                        className="w-100"
                        variant="outlined"
                        label="Customer"
                        type={"text"}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="px-4">
                    <Col md={4}>
                      <Button
                        variant="contained"
                        type="submit"
                        className="w-100  mt-4"
                      >
                        View Emi
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
              <h3>Available EMI</h3>
              <Table className="mt-4" striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>EMI Amount</th>
                    <th>Intrest Amount</th>
                    <th>Total Loan</th>
                    <th>Pay Now</th>
                  </tr>
                </thead>
                <tbody>
                  {isSuccess &&
                    data?.data?.map((loan, index) => (
                      <tr key={loan.id}>
                        <td>{index + 1}</td>
                        <td>{`${loan?.customer?.user?.lastName}, ${loan?.customer?.user?.firstName} ${loan?.customer?.user?.middleName}`}</td>
                        <td>{loan?.customer?.user?.email}</td>
                        <td>{loan.emiAmount}</td>
                        <td>{loan.intAmount}</td>
                        <td>{loan.totalAmount}</td>
                        <td>
                          <Button
                            onClick={() =>
                              makePayment(loan.id, loan.customer.id)
                            }
                            variant="outlined"
                            color="success"
                          >
                            Pay Now
                          </Button>
                        </td>
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
