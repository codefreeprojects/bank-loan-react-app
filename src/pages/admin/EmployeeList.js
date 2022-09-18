import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import {
  useDeleteEmployee,
  useGetEmployeeList,
} from "../../services/admin-service";

export const EmployeeList = () => {
  const { data, isSuccess, refetch } = useGetEmployeeList();
  const { mutate: deleteEmp, isSuccess: delteSuccess } = useDeleteEmployee();

  useEffect(() => {
    refetch();
  }, [delteSuccess]);
  return (
    <Row className="mt-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <h3>All Employees list</h3>
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>Hire Date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isSuccess &&
                  data?.map((emp, index) => (
                    <tr key={emp.name}>
                      <td>{index + 1}</td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.hireDate}</td>
                      <td>{emp.salary}</td>
                      <td>
                        <Button
                          onClick={() => deleteEmp(emp.id)}
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
