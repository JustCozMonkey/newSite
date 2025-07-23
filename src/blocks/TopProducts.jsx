import React from "react";
import Product from "./Product";

function TopProducts() {
    const [products, setProduct] = React.useState([])
    const [error, setError] = React.useState([])

    React.useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products')

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }

                const data = await res.json()
                setProduct(data)
            }
            catch (err) {
                setError(err)
                setProduct([])
            }

        }

        fetchProducts()

    }, [])

    const displayProducts = React.useMemo(() => {
        return products
            .slice()
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 8)
            .map((product) => (
                <Product key={product.id} product={product} />
            ));
    }, [products]);


    return (
        <div className="topProducts-box">
            {displayProducts}
        </div>

    )
}

export default React.memo(TopProducts)