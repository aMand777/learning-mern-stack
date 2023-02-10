import React, { useEffect, useState } from "react";
import "./detailBlog.scss";
import { Button } from "../../components";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log("params :", props.match.params.id);
    const id = props.match.params.id;
    axios
      .get(`http://localhost:5500/v1/blog/post/${id}`)
      .then((res) => {
        console.log("Succes :", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err :", err);
      });
  }, [props]);

  const history = useHistory();
  if (data.author) {
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:5500/${data.image}`} alt={data.image} />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>
          {data.author.name} - {data.createdAt}
        </p>
        <p className='blog-body'>{data.body}</p>
        <Button title='Back' onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading Data ...</p>;
};

export default withRouter(DetailBlog);
