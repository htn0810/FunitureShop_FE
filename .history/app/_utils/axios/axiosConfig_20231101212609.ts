import axios from "axios";
import { BE_URL } from "../../_constants/general.const";
import Cookies from "universal-cookie";

const cookies = new Cookies({ path: "/" });

export default axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: cookies.get("jwt token") || "",
  },
});
