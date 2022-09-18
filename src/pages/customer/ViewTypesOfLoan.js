import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useViewAllLoans } from "../../services/admin-service";

export const ViewTypesOfLoan = () => {
  const { data: allLoans, isSuccess: isLoanDataAvailable } = useViewAllLoans();
  return (
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
  );
};
