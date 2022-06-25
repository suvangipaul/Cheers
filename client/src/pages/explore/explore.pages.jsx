import React from "react";
import "./explore.styles.css";
import { Drink1, Drink2, Drink3, exploreMain } from "../../assets";
import Trending from "../../components/trending/trending.components";

const Explore = () => {
  return (
    <div className="explore">
      <div className="banner-image">
        <img src={exploreMain} alt="" />
      </div>
      <div className="book">
        <div className="book-options">
          <input
            type="text"
            className="book-options-items"
            placeholder="Table for ..."
          />
          <input
            type="text"
            className="book-options-items"
            placeholder="Date"
          />
          <input
            type="text"
            className="book-options-items"
            placeholder="Time"
          />
          <button className="book-options-items">BOOK NOW</button>
        </div>
      </div>
      <div className="trending">
        <h2>Trending</h2>
        <div className="drink-variety">
          <Trending img={Drink3} name="BLA BLA DRINK" />
          <Trending img={Drink2} name="THE RED DRAGON" />
          <Trending img={Drink1} name="GRAPES IN WILD" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
