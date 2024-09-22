import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { product } from "../redux/ProductSlice";
import { faBasketShopping, faStar } from "@fortawesome/free-solid-svg-icons";

const Products = (props: { product: product }) => {
  return (
    <div
      className="py-4 px-2 m-0  col-12 col-md-6 col-lg-4 d-flex flex-column align-items-start rounded-4  border border-1 border-secondary-subtle"
      style={{ transform: "scale(0.95)" }}
    >
      <div className="align-self-center my-4 background-yellow w-100 h-100 d-flex justify-content-center align-items-center">
        <img src={props.product.imgSrc} alt={props.product.name} className="" />
      </div>
      <h2>{props.product.name}</h2>
      <p>{props.product.des}</p>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning ms-1 fs-4" />
        <FontAwesomeIcon icon={faStar} className="text-warning ms-1 fs-4" />
        <FontAwesomeIcon icon={faStar} className="text-warning ms-1 fs-4" />
        <FontAwesomeIcon icon={faStar} className="text-warning ms-1 fs-4" />
        <FontAwesomeIcon icon={faStar} className="text-warning ms-1 fs-4" /> (5)
      </span>
      <div className=" d-flex justify-content-between align-items-center align-self-stretch mx-3 my-2">
        <span className="h2 fw-bold">{`${props.product.price}$`}</span>
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};
export default Products;
