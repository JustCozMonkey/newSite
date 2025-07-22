import React from "react";
import { useParams } from "react-router";

function Product() {
    const { id } = useParams()
    const [product, setProduct] = React.useState([])
    const [error, setError] = React.useState([])



    React.useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)

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

    console.log(product.rating)

    return (
        <>
            <div className="product-info">
                <img className="img-info" src={product.image} alt={product.category} />
                <div className="product-description">
                    <h3>Price:{product.price}$</h3>
                    <p>Free delicery</p>
                    <h2>Raiting</h2>
                    <div className="info-star">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= product.rating?.rate ? 'star selected' : 'star'}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <button className="btn">Add to card</button>
                    <p>{product.description}</p>
                </div>

            </div>
        </>
    )
}

export default React.memo(Product)