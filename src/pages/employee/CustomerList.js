import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  useDeleteCustomer,
  useViewCustomerList,
} from "../../services/employee.service";

export const CustomerList = () => {
  const { data, isSuccess, refetch } = useViewCustomerList();
  const { mutate: deleteCustomer, isSuccess: isMutationComplete } =
    useDeleteCustomer();

  const deleteCustomerCnf = (custId) => {
    Swal.fire({
      title: " Do you want to delete ?",
      icon: "info",
      text: "This customer might taken loan, if you delete all loan will removed for this customer.",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCustomer(custId);
      }
    });
  };
  useEffect(() => {
    if (isMutationComplete) refetch();
  }, [isMutationComplete]);

  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>Customer List</h3>
            <hr />
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>PAN No.</th>
                  <th>Gender</th>
                  <th>Birth Date</th>
                  <th>Occupation</th>
                  <th>Education</th>
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
                      <td>{loan?.gender}</td>
                      <td>{loan?.dob}</td>
                      <td>{loan?.occupation}</td>
                      <td>{loan?.education}</td>
                      <td>
                        <Button
                          onClick={() => deleteCustomerCnf(loan.id)}
                          variant="outlined"
                          color="error"
                        >
                          Delete
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
  );
};
