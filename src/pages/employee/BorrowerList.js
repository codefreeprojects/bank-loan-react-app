import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useViewCustomerList } from "../../services/employee.service";

export const BorrowerList = () => {
  const { data, isSuccess } = useViewCustomerList();
  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>Borrowers List</h3>
            <hr />
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>PAN No.</th>
                  <th>Loan Type</th>
                  <th>Amount</th>
                  <th>Birth Date</th>
                  <th>Occupation</th>
                  <th>Education</th>
                </tr>
              </thead>
              <tbody>
                {isSuccess &&
                  data?.map((loan, index) => (
                    <tr key={loan.id}>
                      <td>{index + 1}</td>
                      <td>{`${loan?.user?.lastName}, ${loan?.user?.firstName} ${loan?.user?.middleName} `}</td>
                      <td>{loan?.user?.email}</td>
                      <td>{loan?.panNumber}</td>
                      <td>{loan?.loan?.loanType}</td>
                      <td>{loan?.loanAmount}</td>
                      <td>{loan?.dob}</td>
                      <td>{loan?.occupation}</td>
                      <td>{loan?.education}</td>
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
