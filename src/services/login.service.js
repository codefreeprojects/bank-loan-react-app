import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { post } from "./api.common";

export const useLogin = (navigator) =>
  useMutation((payload) => post("/auth/login", payload), {
    onSuccess: (data) => {
      if (data?.success) {
        sessionStorage.setItem("userInformation", JSON.stringify(data?.data));
        if (data?.data?.user?.role === "CUSTOMER") navigator("/customer");
        if (data?.data?.user?.role === "ADMIN") navigator("/admin");
        if (data?.data?.user?.role === "EMPLOYEE") navigator("/employee");
      } else {
        Swal.fire("Alert", data?.message, "info");
      }
    },
    onError: () =>
      Swal.fire("Error", "Something went wrong try again", "error"),
  });
export const useRegister = (navigator) =>
  useMutation((payload) => post("/auth/register", payload), {
    onSuccess: (data) => {
      Swal.fire("Alert", data?.message, data?.success ? "success" : "info");
      navigator("/");
    },
    onError: () =>
      Swal.fire("Error", "Something went wrong try again", "error"),
  });
