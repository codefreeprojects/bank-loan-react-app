import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddEmployee } from "./admin/AddEmployee";
import { AddLoanType } from "./admin/AddLoanType";
import { EmployeeList } from "./admin/EmployeeList";
import { ViewLoanApplication } from "./admin/ViewLoanApplication";
import { ViewPayments } from "./admin/ViewPayments";
import { AdminLayout } from "./AdminLayout";
import { ApplyLoan } from "./customer/ApplyLoan";
import { DocumentsRequired } from "./customer/DocumentsRequired";
import { EditProfile } from "./customer/EditProfile";
import { EmiDetails } from "./customer/EmiDetails";
import { ViewTypesOfLoan } from "./customer/ViewTypesOfLoan";
import { CustomerLayout } from "./CustomerLayout";
import { AddAddress } from "./employee/AddAddress";
import { AddCustomer } from "./employee/AddCustomer";
import { BorrowerList } from "./employee/BorrowerList";
import { CustomerList } from "./employee/CustomerList";
import { MakePayment } from "./employee/MakePayment";
import { EmployeeLayout } from "./EmployeeLayout";
import { Login } from "./Login";
import { Register } from "./Register";
import { Welcome } from "./Welcome";

export const Layout = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Welcome />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="add-loan-type" element={<AddLoanType />} />
        <Route
          path="view-loan-applications"
          element={<ViewLoanApplication />}
        />
        <Route path="view-payments" element={<ViewPayments />} />
      </Route>
      <Route path="employee" element={<EmployeeLayout />}>
        <Route index element={<Welcome />} />
        <Route
          path="view-loan-applications"
          element={<ViewLoanApplication />}
        />
        <Route path="customer-list" element={<CustomerList />} />
        <Route path="borrower-list" element={<BorrowerList />} />
        <Route path="add-customer" element={<AddCustomer />} />
        <Route path="make-payment" element={<MakePayment />} />
        <Route path="add-address" element={<AddAddress />} />
      </Route>
      <Route path="customer" element={<CustomerLayout />}>
        <Route index element={<Welcome />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="loan-types" element={<ViewTypesOfLoan />} />
        <Route path="emi-details" element={<EmiDetails />} />
        <Route path="documents-required" element={<DocumentsRequired />} />
        <Route path="apply-loan" element={<ApplyLoan />} />
      </Route>
    </Routes>
  );
};
