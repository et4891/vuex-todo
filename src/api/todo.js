import axios from "axios";
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
// const BASE_URL = "http://localhost:3001/api/todo";

export default {
  fetch: () => {
    return axios.get(BASE_URL);
  },
  create: item => axios.post(BASE_URL, { item }),
  modify: (_id, item) => axios.patch(`${BASE_URL}/${_id}`, { item }),
  remove: _id => axios.delete(BASE_URL, { data: { _id } }),
  isCompleted: todo => axios.patch(`${BASE_URL}/completed`, todo)
};
