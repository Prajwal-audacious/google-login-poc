import { useQuery } from "@tanstack/react-query";
import ApiCaller from "./api";

export const authLogin = (token) => {
  return ApiCaller(
    `auth/info/${token}`,
    "GET",
    {},
    "http://192.168.1.27:3000/"
  );
};



