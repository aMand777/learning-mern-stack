import axios from "axios";

export const setDatablog = (page) => (dispatch) => {
  axios
    .get(`http://localhost:5500/v1/blog/posts?page=${page}&perPage=2`)
    .then((result) => {
      const blogApi = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: blogApi.data });
      dispatch({ type: "UPDATE_PAGE", payload: { currentPage: blogApi.current_page, totalPage: Math.ceil(blogApi.total_data / blogApi.per_page) } });
    })
    .catch((err) => {
      console.log("Error :", err);
    });
};
