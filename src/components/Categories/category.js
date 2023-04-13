import "./category.css";
import { Link } from "react-router-dom";
// import { Axios } from "axios";
// import { useState } from "react";

function Category() {
  return (
    <div className="container-fluid">
      <div className="Categoriesbox">
        <h2 className="title">Categories</h2>

        <div className="row">
          <div className="category">
            <Link to="productlisitng">
              <div className="men_cat">
                <div className="left-text">
                  <span className="cat-text">MEN</span>
                  <span className="cat-text1">Spring 2018</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category">
            <Link to="color">
              <div className="women_cat">
                <div className="left-text">
                  <span className="cat-text">WOMEN</span>
                  <span className="cat-text1">Spring 2018</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category">
            <Link to="productlisitng">
              <div className="cap_cat">
                <div className="left-text">
                  <span className="cat-text">CAP</span>
                  <span className="cat-text1">Spring 2018</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
