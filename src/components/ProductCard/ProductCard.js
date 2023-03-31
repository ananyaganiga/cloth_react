import "./ProductCard.css";
function ProductCard(props) {
  return (
    <div className="product_card">
      <div className="product_image">
        <img src={props.img} alt="product1" className="product_img_src" />
      </div>
      <div className="prod-info">
        <div className="product-name">
          <p className="product_title">{props.title}</p>
          <p class="product_price">{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
