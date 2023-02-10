import React from "react";
import { Button, Gap, ButtonUpdate, ButtonDelete } from "../../atoms";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body, id, onDelete } = props;
  return (
    <div className='blog-item'>
      <img className='image-thumb' src={image} alt={name} width='50px' />
      <div className='content-detail'>
        <p className='title'>{title}</p>
        <p className='author'>
          {name} - {date}
        </p>
        <p className='body'>{body}</p>
        <Gap height={20} />
        <div className='wrapper-btn'>
          <div>
            <Button title='Detail' onClick={() => history.push(`/detail-blog/${id}`)} />
          </div>
          <div>
            <ButtonUpdate title='Edit' onClick={() => history.push(`/create-blog/${id}`)} style={{ marginRight: "5px" }} />
            <ButtonDelete title='Delete' onClick={() => onDelete(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
