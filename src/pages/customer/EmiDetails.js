import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useUserEmi } from "../../services/customer.service";

export const EmiDetails = () => {
  const { data: allEmi, isSuccess } = useUserEmi();
  return (
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
                </tr>
              </thead>
              <tbody>
                {isSuccess &&
                  allEmi?.map((loan, index) => (
                    <tr key={loan.id}>
                      <td>{index + 1}</td>
                      <td>{`${loan?.customer?.user?.lastName}, ${loan?.customer?.user?.firstName} ${loan?.customer?.user?.middleName}`}</td>
                      <td>{loan?.customer?.user?.email}</td>
                      <td>{loan.emiAmount}</td>
                      <td>{loan.intAmount}</td>
                      <td>{loan.totalAmount}</td>
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
