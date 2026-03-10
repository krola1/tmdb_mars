import axios from "axios";
import { env } from "../config/env.js";

export const api_tmdb = axios.create({
  baseURL: env.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
});
