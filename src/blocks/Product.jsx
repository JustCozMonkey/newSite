import React from "react";
import { Link } from "react-router";

function Product({ product }) {

    return (
        <Link to={`/shop/product/${product.id}`} className="product">
            <img className="product-img" src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{`${product.price}$`}</p>
        </Link>
    )
}

export default React.memo(Product)