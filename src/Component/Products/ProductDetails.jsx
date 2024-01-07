import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  const {
    thumbnail,
    category,
    discountPercentage,
    title,
    description,
    brand,
    price,
    rating,
  } = loadData;

  return (
    <div className="card card-compact lg:w-1/3 mx-3 lg:mx-auto bg-red-200 shadow-xl p-2 rounded-xl">
        <div>
          <figure className="rounded-lg">
            <img src={thumbnail} alt={`Photo of ${title} is missing`} />
          </figure>
          <div className="flex justify-between px-3 my-4">
            <div>
              <h2 className="card-title text-2xl">{title}</h2>
              <p className="text-lg">Category: {category}</p>
              <p className="text-lg">Price: {price}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Brand: {brand}</p>
              <p className="text-lg">Rating: {rating}</p>
              <p className="text-lg">Discount: {discountPercentage}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="px-2 mt-2 text-center">{description}</p>
        </div>
    </div>
  );
};

export default ProductDetails;
