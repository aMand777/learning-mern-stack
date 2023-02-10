import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToApi = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  axios
    .post("http://localhost:5500/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then((res) => {
      console.log("Create Success :", res);
    })
    .catch((err) => {
      console.log("Create Error :", err);
    });
};

export const updateToApi = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  axios
    .put(`http://localhost:5500/v1/blog/post/${id}`, data, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then((res) => {
      console.log("Update Success :", res);
    })
    .catch((err) => {
      console.log("Update Error :", err);
    });
};
