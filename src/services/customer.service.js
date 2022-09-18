import { useMutation, useQuery } from "@tanstack/react-query";
import { normalAlert } from "./admin-service";
import { getAuth, putAuth } from "./api.common";

export const useUserProfile = () =>
  useMutation(
    (prop) => putAuth(`/user/update/${prop.userId}`, prop.payload),
    normalAlert
  );
export const useUserDetails = () =>
  useQuery(
    ["get-user-details"],
    () => {
      const userInfo = JSON.parse(
        sessionStorage.getItem("userInformation") || ""
      );
      return getAuth(`/user/details/${userInfo?.user.id}`);
    },
    {
      select: (data) => data?.data,
    }
  );

export const useUserEmi = () =>
  useQuery(
    ["get-user-emi"],
    () => {
      const userInfo = JSON.parse(
        sessionStorage.getItem("userInformation") || ""
      );
      return getAuth(`/customer/emi/${userInfo?.user.id}`);
    },
    {
      select: (data) => data?.data,
    }
  );
