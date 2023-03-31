import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import Category from "../../components/Categories/category";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/bannerimg.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner ananyaImg={bannerImg} />
      <Category />
      <Link to="about">
        <button>Go to about page</button>
      </Link>
    </div>
  );
}

export default Home;
