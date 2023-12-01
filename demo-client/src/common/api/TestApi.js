import axios from "axios";
import { UserApi } from "./UserApi";
import { apiClient } from "../client/ApiClient";

export const fetcthString = async () => {
  const response = await apiClient.get("/test/String");
  return response.data;
};
