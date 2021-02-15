import axios from "axios";
import { NGROK_LINK } from "../../app.config";

export default axios.create({
  baseURL: NGROK_LINK,
});
