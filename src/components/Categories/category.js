import "./category.css";
import { Link } from "react-router-dom";
// import { Axios } from "axios";
// import { useState } from "react";

function Category() {
  return (
    <div class="container-fluid">
      <div class="Categoriesbox">
        <h2 class="title">Categories</h2>

        <div class="row">
          <div class="category">
            <Link to="productlisitng">
              <div class="men_cat">
                <div class="left-text">
                  <span class="cat-text">MEN</span>
                  <span class="cat-text1">Spring 2018</span>
                </div>
              </div>
            </Link>
          </div>

          <div class="category">
            {/* <Link to="productlisitng"> */}
            <div class="women_cat">
              <div class="left-text">
                <span class="cat-text">WOMEN</span>
                <span class="cat-text1">Spring 2018</span>
                {/* <button onClick={getProduct}>CLICK HERE</button>
                {productData} */}
              </div>
            </div>
            {/* </Link> */}
          </div>

          <div class="category">
            <Link to="productlisitng">
              <div class="cap_cat">
                <div class="left-text">
                  <span class="cat-text">CAP</span>
                  <span class="cat-text1">Spring 2018</span>
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
