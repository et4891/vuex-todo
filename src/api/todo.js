import axios from "axios";
const BASE_URL = "https://express-tutorial-api.herokuapp.com/api/todo";

export default {
  fetchTodos: () => {
    return axios.get(BASE_URL);
  }
};
