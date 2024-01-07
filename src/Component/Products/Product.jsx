import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Product = ({ getProduct }) => {
  const { id, price, title, images } = getProduct;

//   btn handler using navigate
const btnNavigate = useNavigate()
const NavigateButtonHandler = () => {
    btnNavigate(`/products/${id}`)
}
//   btn handler using navigate end

  return (
    <div className="card card-compact w-full h-96 bg-gray-200 shadow-xl p-2 rounded-xl">
      <figure className="rounded-lg">
        <img src={images[0]} alt={`Photo of ${title} is missing`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-lg">Price: {price}</p>
        <div className="card-actions justify-end">
          <button onClick={NavigateButtonHandler} className="btn bg-green-600 text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  getProduct: PropTypes.object,
};

export default Product;
