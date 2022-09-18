import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteAuth, getAuth, postAuth } from "./api.common";
export const normalAlert = {
  onSuccess: (data) => {
    Swal.fire("Alert", data?.message, data?.success ? "success" : "info");
  },
  onError: () => Swal.fire("Error", "Something went wrong try again", "error"),
};
export const useRegisterEmployee = () =>
  useMutation(
    (payload) => postAuth("/admin/add-employee", payload),
    normalAlert
  );

export const useGetEmployeeList = () =>
  useQuery(["get-employee-list"], () => getAuth("/admin/list-employees"), {
    select: (res) =>
      res?.data?.map((item) => ({
        name:
          item?.user?.lastName +
          ", " +
          item?.user?.firstName +
          " " +
          item?.user?.middleName,
        email: item?.user?.email,
        designation: item?.designation,
        hireDate: item?.hireDate,
        salary: item?.salary,
        id: item?.id,
      })),
  });

export const useDeleteEmployee = () =>
  useMutation((empId) => deleteAuth(`/admin/remove-employee/${empId}`));
export const useAddLoanType = () =>
  useMutation(
    (payload) => postAuth(`/admin/add-laon-type`, payload),
    normalAlert
  );

export const useViewAllLoans = () =>
  useQuery(
    ["get-view-types-of-loans"],
    () => getAuth("/customer/view-types-of-loans"),
    {
      select: (res) => res?.data,
    }
  );

export const useViewAllLoansApplications = () =>
  useQuery(["get-view-all-loans"], () => getAuth("/admin/view-all-loans"), {
    select: (res) => res?.data,
  });
export const useViewAllLoansPayments = () =>
  useQuery(["get-view-payment"], () => getAuth("/admin/view-payment"), {
    select: (res) => res?.data,
  });

export const useApproveLoan = () =>
  useMutation(
    (customerId) => getAuth(`/employee/approve-loan/${customerId}`),
    normalAlert
  );

export const useAuthAdmin = () => {
  const userInfo = JSON.parse(
    sessionStorage.getItem("userInformation") || "{}"
  );
  return userInfo !== "" && userInfo?.user?.role === "ADMIN";
};
export const useAuthCustomer = () => {
  const userInfo = JSON.parse(
    sessionStorage.getItem("userInformation") || "{}"
  );
  return userInfo !== "" && userInfo?.user?.role === "CUSTOMER";
};
export const useAuthEmployee = () => {
  const userInfo = JSON.parse(
    sessionStorage.getItem("userInformation") || "{}"
  );
  return userInfo !== "" && userInfo?.user?.role === "EMPLOYEE";
};
