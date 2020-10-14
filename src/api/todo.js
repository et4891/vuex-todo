import axios from "axios";
const BASE_URL = "https://express-tutorial-api.herokuapp.com/api/todo";

export default {
  fetch: () => {
    return axios.get(BASE_URL);
  },
  create: item => axios.post(BASE_URL, { item }),
  isCompleted: todo => axios.patch(`${BASE_URL}/completed`, todo)
};
