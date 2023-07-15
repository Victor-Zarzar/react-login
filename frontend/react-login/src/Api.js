import axios from "axios";

const API_URL = "http://localhost:5000";

export const RegisterUser = (email) => {
    const payload = {
      email: email,
      password: "victor",
    };
    return axios.post(`${API_URL}/login`, payload);
  };

