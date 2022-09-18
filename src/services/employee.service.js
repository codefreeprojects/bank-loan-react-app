import { useMutation, useQuery } from "@tanstack/react-query";
import { normalAlert } from "./admin-service";
import { deleteAuth, getAuth, postAuth } from "./api.common";

export const useViewCustomerList = () =>
  useQuery(["get-customer-list"], () => getAuth("/employee/customer-list"), {
    select: (res) => res?.data,
  });
export const useDeleteCustomer = () =>
  useMutation(
    (empId) => deleteAuth(`/employee/remove-customer/${empId}`),
    normalAlert
  );
export const useUsersDropdown = () =>
  useQuery(["get-users-dropdown"], () => getAuth("/employee/users-list"), {
    select: (res) =>
      res?.data?.map((user) => ({
        key: user.id,
        value: `${user.lastName}, ${user.firstName} ${user.middleName}`,
      })),
  });
export const useLoansDropdown = () =>
  useQuery(["get-loan-types"], () => getAuth("/customer/view-types-of-loans"), {
    select: (res) =>
      res?.data?.map((loan) => ({
        key: loan.id,
        value: loan.loanType,
      })),
  });
export const useCustomersDropdown = () =>
  useQuery(["get-customer-list"], () => getAuth("/employee/customer-list"), {
    select: (res) =>
      res?.data?.map((cust) => ({
        key: cust.id,
        value: `${cust.user?.lastName} , ${cust.user?.firstName}, ${cust.user?.middleName}`,
      })),
  });

export const useAddNewCustomer = () =>
  useMutation(
    (payload) => postAuth(`/employee/add-customer`, payload),
    normalAlert
  );
export const useViewEmiList = () =>
  useMutation((custId) => getAuth(`/customer/emi-details/${custId}`));
export const useMakePayment = () =>
  useMutation(
    (prop) =>
      getAuth(
        `/employee/make-payment?customerId=${prop.custId}&emiId=${prop.emiId}`
      ),
    normalAlert
  );
export const useAddAddress = () =>
  useMutation(
    (prop) => postAuth(`/address/save/${prop.userId}`, prop.payload),
    normalAlert
  );
