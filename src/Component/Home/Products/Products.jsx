import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const myData = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-2 lg:mx-auto ">
            {
                myData.products.map(soloProduct => <Product key={soloProduct.id} getProduct={soloProduct}></Product>)
            }
        </div>
    );
};

export default Products;