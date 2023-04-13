import "./ProductCard.css";
function ProductCard(props) {
  return (
    <div className="product_card">
      <div className="product_image">
        <img src={props.url} alt="product1" className="product_img_src" />
      </div>
      <div className="prod-info">
        <div className="product-name">
          <p className="product_title">{props.title}</p>
          <p className="product_price">{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
