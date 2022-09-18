import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useViewAllLoansPayments } from "../../services/admin-service";

export const ViewPayments = () => {
  const { data, isSuccess } = useViewAllLoansPayments();
  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>Loan EMI Payments</h3>
            <hr />
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Loan Amount</th>
                  <th>Receipt Date</th>
                  <th>EMI Amount</th>
                  <th>Payment No.</th>
                </tr>
              </thead>
              <tbody>
                {isSuccess &&
                  data?.map((payment, index) => (
                    <tr key={payment.id}>
                      <td>{index + 1}</td>
                      <td>{`${payment?.customer?.user?.lastName}, ${payment?.customer?.user?.firstName} ${payment?.customer?.user?.middleName} `}</td>
                      <td>{payment?.customer?.user?.email}</td>
                      <td>{payment?.customer?.loanAmount}</td>
                      <td>{payment?.reciptDate}</td>
                      <td>{Math.round(payment?.emiAmount * 100) / 100}</td>
                      <td>{payment?.paymentNumber}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
