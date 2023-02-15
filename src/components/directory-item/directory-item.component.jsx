import React from "react";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(category.route);

  return (
    <div
      className='directory-item-container'
      id={category.id}
      onClick={onNavigateHandler}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className='body'>
        <h2>{category.title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
