import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const docs = [
  "Addhar card",
  "PAN Card",
  "Electricity Bill",
  "Income Certificate",
  "Salary Slip",
  "Bank Statement",
];
export const DocumentsRequired = () => {
  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>Documents Required</h3>
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((loan, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <th>{loan}</th>
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
