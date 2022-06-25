import React from "react";
import "./trending.styles.css";

const Trending = ({ img, name }) => {
  return (
    <div className="trending-container">
      <div className="trending-content">
        <img src={img} alt="" className="drinks" />
        <div className="drink-bg">
          <h4>{name}</h4>
          <div className="drink-effect">
            <h4>Try Now</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
