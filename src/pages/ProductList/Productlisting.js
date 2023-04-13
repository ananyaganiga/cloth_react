import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import "./Productlisitng.css";
// import P1 from "../../assets/P1.png";

import banner2 from "../../assets/banner-img2.jpg";
import cart from "../../assets/shopping-cart.png";
import search from "../../assets/search.png";
import wishlist from "../../assets/wishlist.png";
import category from "../../assets/category.png";
import filter from "../../assets/filter.png";
import axios from "axios";
// Custom Components
import Footer from "../../components/Footer/footer";
import Navbar2 from "../../components/Navbar2/navbar2";
import Banner from "../../components/Banner/banner";
// Custom Components

import Navbar from "../../components/Navbar/navbar";

const baseurl = "https://jsonplaceholder.typicode.com/photos";
function Productlisting() {
  const [productDataResult, setproductData] = useState("");

  useEffect(() => {
    axios
      .get(baseurl)
      .then((res) => {
        console.log(res.data, "data in the api call");
        handleTrim(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleTrim = (apidata) => {
    const splicedata = apidata.splice(0, 10);
    console.log(splicedata, "data with the size 10");
    setproductData(splicedata);
  };

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
        {productDataResult &&
          productDataResult.map((item) => {
            return (
              console.log(item.url),
              (
                <ProductCard
                  title={item.title}
                  body={item.body}
                  url={item.url}
                />
              )
            );
          })}
      </div>
    </>
  );
}

export default Productlisting;
