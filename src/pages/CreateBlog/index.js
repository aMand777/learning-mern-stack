import React, { useState, useEffect } from "react";
import { Input, Button, Upload, TextArea, Gap } from "../../components/atoms";
import "./createBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postToApi, setForm, setImgPreview, updateToApi } from "../../config/redux/action";
import axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // console.log("params :", props);
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:5500/v1/blog/post/${id}`)
        .then((res) => {
          console.log("res :", res);
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:5500/${data.image}`));
        })
        .catch((err) => {
          console.log("err :", err);
        });
    }
  }, [props]);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      updateToApi(form, id);
      history.push("/");
      console.log("update data");
    } else {
      postToApi(form);
      history.push("/");
      console.log("create data");
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className='create-blog'>
      <p className='create-post'>{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <div className='post-title'>
        <Input label='Post title' value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
      </div>
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm("body", e.target.value))} />
      <Gap width={20} />
      <div className='button-post'>
        <Button title='Back' onClick={() => history.push("/")} />
        <Button title={isUpdate ? "Update" : "Save"} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
