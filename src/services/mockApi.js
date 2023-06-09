import axios from "axios";

axios.defaults.baseURL =
  "https://64793789a455e257fa630948.mockapi.io";

export const getUserApi = async (number) => {
  return await axios
    .get("card", {
      params: {
        page: number,
        // limit: 99,
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
};

export const changeUserApi = async (id, result) => {
  return await axios
    .put(`/card/${id}`, {
      followers: result,
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
};
