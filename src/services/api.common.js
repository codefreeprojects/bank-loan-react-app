import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
export const post = async (uri, payload) => {
  const { data } = await axios.post(BASE_URL + uri, payload);
  return data;
};
export const postAuth = async (uri, payload) => {
  const { data } = await axios.post(BASE_URL + uri, payload, getAuthHeader());
  return data;
};
export const putAuth = async (uri, payload) => {
  const { data } = await axios.put(BASE_URL + uri, payload, getAuthHeader());
  return data;
};
export const getAuth = async (uri) => {
  const { data } = await axios.get(BASE_URL + uri, getAuthHeader());
  return data;
};
export const deleteAuth = async (uri) => {
  const { data } = await axios.delete(BASE_URL + uri, getAuthHeader());
  return data;
};

export const getAuthHeader = () => {
  const session = sessionStorage.getItem("userInformation");
  const token = session ? JSON.parse(session)?.token : "";
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};
