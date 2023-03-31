import ProductCard from "../../components/ProductCard/ProductCard";
import "./Productlisitng.css";
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
import P5 from "../../assets/P5.png";
import P6 from "../../assets/P6.png";
import P7 from "../../assets/P7.png";
import P8 from "../../assets/P8.png";
import P9 from "../../assets/P9.webp";
import P10 from "../../assets/P10.webp";
import P11 from "../../assets/P11.webp";
import P12 from "../../assets/P12.webp";
import P13 from "../../assets/P13.webp";
import P14 from "../../assets/P14.webp";
import banner2 from "../../assets/banner-img2.jpg";
import cart from "../../assets/shopping-cart.png";
import search from "../../assets/search.png";
import wishlist from "../../assets/wishlist.png";
import category from "../../assets/category.png";
import filter from "../../assets/filter.png";

// Custom Components
import Footer from "../../components/Footer/footer";
import Navbar2 from "../../components/Navbar2/navbar2";
import Banner from "../../components/Banner/banner";
// Custom Components

import { Component } from "react";
import Navbar from "../../components/Navbar/navbar";

function Productlisting() {
  const productData = [
    {
      title: "Esprit Ruffle Shirt",
      price: "$16.84",
      img: P1,
    },
    {
      title: "Classic Trench Coaty",
      price: "$75.00",
      img: P2,
    },
    {
      title: "Front Pocket Jumper",
      price: "$34.78",
      img: P3,
    },
    {
      title: "Shirt in Stretch Cotton",
      price: "$54.88",
      img: P4,
    },
    {
      title: "Tshirt with Sleeve",
      price: "$52.99",
      img: P5,
    },
    {
      title: "Femmme Shirt",
      price: "$99.99",
      img: P7,
    },
    {
      title: "Metallic Printed",
      price: "$89.90",
      img: P8,
    },
    {
      title: "Square Neck",
      price: "$23.88",
      img: P9,
    },
    {
      title: "Rolez Adison",
      price: "$55.44",
      img: P10,
    },
    {
      title: "Rolixon",
      price: "$55.33",
      img: P11,
    },
    {
      title: "Casual Fit",
      price: "$22.44",
      img: P12,
    },
    {
      title: "Rolling metallic",
      price: "$86.44",
      img: P13,
    },
    {
      title: "Elegant Fit",
      price: "$55.09",
      img: P14,
    },
  ];
  return (
    <>
      <Navbar />
      <Banner ananyaImg={banner2} />
      <div className="product-bar">
        <div className="cat-icon">
          <img className="cat-icon" src={category} />
        </div>
        <div className="cat-icon">
          <img className="cat-icon" src={filter} />
        </div>
      </div>
      <div className="product-collection">
        {productData &&
          productData.map((item) => {
            return (
              <ProductCard
                title={item.title}
                price={item.price}
                img={item.img}
              />
            );
          })}
      </div>
    </>
  );
}

// {
/* <div className="footer-div">
  <div class="footer-div">
    <div class="row">
      <div class="col2">
        <h4 class="sections">CATEGORIES</h4>
        <ul>
          <li class="lists">
            <a href="#" class="text-hov">
              Women
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              Men
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              Shoes
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              Watches
            </a>
          </li>
        </ul>
      </div>
      <div class="col2">
        <h4 class="sections"> HELP</h4>
        <ul>
          <li class="lists">
            <a href="#" class="text-hov">
              Track Order
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              Return
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              Shipping
            </a>
          </li>
          <li class="lists">
            <a href="#" class="text-hov">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div class="col3">
        <h4 class="sections">GET IN TOUCH</h4>
        <p class="para-footer">
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1) 96 716 6879
        </p>
        <div class="social">
          <div class="brand-logo">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div class="brand-logo">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="brand-logo">
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div class="col2">
        <h4 class="sections">NEWSLETTER</h4>
        <form>
          <div class="wrap-input">
            <input
              class="input1"
              type="text"
              name="email"
              placeholder="info@cozastore.com"
            />
          </div>
          <br />
          <div class="last">
            <button class="subscribe">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>; */
// }

export default Productlisting;
