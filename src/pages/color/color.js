import "./color.css";
import az_blue from "../../assets/az_blue.jpg";
import br_black from "../../assets/br_black.jpg";
import gr_white from "../../assets/grace_white.png";
import nm_red from "../../assets/nm_red.jpg";
import { useState } from "react";
import Category from "../../components/Categories/category";
import { choose } from "@testing-library/user-event/dist/type";

function Color(props) {
  const [modelcolor, setmodelcolor] = useState({
    color: "black",
    Img: br_black,
    sub: "black color,colorrrrrrr",
    heading: "Brazen Black",
    paragraph:
      " Black can be fun and playful, while some  find it bold, exciting or even dominating,  it stays a truly striking, eccentriccolour.",
  });
  const ColorHandle = (choose) => {
    if (choose === "red") {
      setmodelcolor({
        color: "red",
        Img: nm_red,
        sub: "Truly yours, from the heart to your roots",
        heading: "Namma Red",
        paragraph:
          " Red can be fun and playful, while some  find it bold, exciting or even dominating,  it stays a truly striking, eccentriccolour.",
      });
    } else if (choose === "black")
      setmodelcolor({
        color: "black",
        Img: br_black,
        sub: "Truly yours, from the heart to your roots",
        heading: "Brazen Black",
        paragraph:
          " Black can be fun and playful, while some  find it bold, exciting or even dominating,  it stays a truly striking, eccentriccolour.",
      });
    else if (choose === "blue") {
      setmodelcolor({
        color: "blue",
        Img: az_blue,
        sub: "Nonchalant blue like a cloudless sky",
        heading: "Azure Blue",
        paragraph:
          " Blue can be fun and playful, while some  find it bold, exciting or even dominating,  it stays a truly striking, eccentriccolour.",
      });
    } else if (choose === "white") {
      setmodelcolor({
        color: "white",
        Img: gr_white,
        sub: "Smooth, elegant movement, pure",
        heading: "Grace White",
        paragraph:
          " white can be fun and playful, while some  find it bold, exciting or even dominating,  it stays a truly striking, eccentriccolour.",
      });
    }
  };

  return (
    <>
      <div className="clr-container">
        <img src={modelcolor.Img} alt="br_black" className="image" />
        <div className="switch-color">
          <div className="color-item" onClick={() => ColorHandle("black")}>
            <div
              className={
                modelcolor.color === "black" ? "black-active" : "normal-black"
              }
            ></div>
            {modelcolor.color === "black" && (
              <div className="color-heading">Brazen Black</div>
            )}
          </div>
          <div className="color-item" onClick={() => ColorHandle("red")}>
            <div
              className={
                modelcolor.color === "red" ? "red-active" : "normal-red"
              }
            ></div>
            {modelcolor.color === "red" && (
              <div className="color-heading">Namma Red</div>
            )}
          </div>

          <div className="color-item" onClick={() => ColorHandle("blue")}>
            <div
              className={
                modelcolor.color === "blue" ? "blue-active" : "normal-blue"
              }
            ></div>
            {modelcolor.color === "blue" && (
              <div className="color-heading">Blue</div>
            )}
          </div>

          <div className="color-item" onClick={() => ColorHandle("white")}>
            <div
              className={
                modelcolor.color === "white" ? "white-active" : "normal-white"
              }
            ></div>
            {modelcolor.color === "white" && (
              <div className="color-heading">White</div>
            )}
          </div>
        </div>
        <div className="para-column">
          <span className="head-bold">{modelcolor.sub}</span>
          <div
            className="break-line"
            style={{
              backgroundColor:
                modelcolor.color === "black"
                  ? "black"
                  : modelcolor.color === "red"
                  ? "red"
                  : modelcolor.color === "blue"
                  ? "skyblue"
                  : "white",
            }}
          ></div>
          <p className="para-text">{modelcolor.paragraph}</p>
          <div className="button">
            <button className="button-prebook">
              <b>PRE-BOOK</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Color;
