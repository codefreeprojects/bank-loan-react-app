import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import {
  useApproveLoan,
  useViewAllLoansApplications,
} from "../../services/admin-service";

export const ViewLoanApplication = () => {
  const { data, isSuccess, refetch } = useViewAllLoansApplications();
  const { mutate: approveLoan, isSuccess: isMutationSuccess } =
    useApproveLoan();
  useEffect(() => {
    if (isMutationSuccess) refetch();
  }, [isMutationSuccess]);

  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>Loan applications and status</h3>
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
                  <th>Status</th>
                  <th>Action</th>
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
                      <td>{loan?.loanStatus}</td>
                      <td>
                        {loan?.loanStatus === "PENDING" && (
                          <Button
                            onClick={() => approveLoan(loan.id)}
                            variant="outlined"
                            color="success"
                          >
                            Approve
                          </Button>
                        )}
                      </td>
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
