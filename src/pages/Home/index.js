import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { Button, Gap } from "../../components/atoms";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDatablog } from "../../config/redux/action";
import { confirmAlert } from "react-confirm-alert"; //import
import "react-confirm-alert/src/react-confirm-alert.css"; //import css
import axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDatablog(counter));
  }, [counter]);

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`http://localhost:5500/v1/blog/post/${id}`)
              .then((res) => {
                console.log("Delete Success", res.data);
                dispatch(setDatablog(counter));
              })
              .catch((err) => {
                console.log("Delete Failed", err);
              })
        },
        {
          label: "No",
          onClick: () => console.log("User Click No")
        }
      ]
    });
  };

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='Create' onClick={() => history.push("/create-blog")} />
      </div>
      <div className='content-wrapper'>
        {dataBlog.map((blog) => {
          return <BlogItem key={blog._id} image={`http://localhost:5500/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} id={blog._id} onDelete={confirmDelete} />;
        })}
      </div>
      <div className='pagination'>
        <Button title='Prev' onClick={previous} />
        <Gap width={10} />
        <p className='text-page'>
          {page.currentPage}/{page.totalPage}
        </p>
        <Gap width={10} />
        <Button title='next' onClick={next} />
      </div>
    </div>
  );
};

export default Home;
