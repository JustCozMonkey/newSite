import React from "react";
import { useSearchParams } from "react-router";
import MenuDropdown from "./MenuDropdown";
import StarFilter from "./StarFilter";
import PriceFilter from "./PriceFilter";

function Products() {

    const [products, setProduct] = React.useState([])
    const [error, setError] = React.useState([])
    const [searchParam, setSearchParams] = useSearchParams()
    const [rating, setRating] = React.useState(0)



    const categoryFilter = searchParam.getAll("category")
    const ratingFilter = searchParam.get("rating")
    const priceFilter = searchParam.get("price")



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

    function updateFilter(key, value) {
        const newParams = new URLSearchParams(searchParam)
        const existingValues = newParams.getAll(key)

        if (!value) {
            newParams.delete(key)
        } else {
            if (key === "rating") {
                existingValues.includes(value) ?
                    newParams.delete(key) :
                    newParams.set(key, value)

            }
            else if (key === "price") {
                newParams.set(key, value)
            }
            else {
                if (existingValues.includes(value)) {
                    newParams.delete(key)
                    existingValues
                        .filter(v => v !== value)
                        .forEach(v => newParams.append(key, v))
                } else {
                    newParams.append(key, value)
                }
            }
        }

        setSearchParams(newParams)
    }

    const displayProducts = React.useMemo(() => {
        return products.filter(product => {
            const categoryMatch = categoryFilter.length === 0 || categoryFilter.includes(product.category.toLowerCase())
            const ratingMatch = !ratingFilter || Math.floor(product.rating?.rate) >= parseInt(ratingFilter)
            const priceMatch = !priceFilter || product.price <= parseInt(priceFilter)

            return categoryMatch && ratingMatch && priceMatch
        })
    }, [products, categoryFilter, ratingFilter, priceFilter])


    const productsElem = displayProducts.map((product) => {
        return (
            <div key={product.id} className="product">
                <img className="product-img" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{`${product.price}$`}</p>
            </div>
        )
    })


    return (
        <div className="products-container">
            <div className="filtres">
                <MenuDropdown name={"Category"}>
                    <button className="filter" onClick={() => updateFilter("category", "men's clothing")}>"Men's clothing"</button>
                    <button className="filter" onClick={() => updateFilter("category", "jewelery")}>Jewelery</button>
                    <button className="filter" onClick={() => updateFilter("category", "electronics")}>Electronics</button>
                    <button className="filter" onClick={() => updateFilter("category", "women's clothing")}>Women's clothing</button>
                    <button className="filter" onClick={() => updateFilter("category", "")}>Clear</button>
                </MenuDropdown>
                <MenuDropdown name={"Rating"}>
                    <StarFilter updateFilter={updateFilter} />
                </MenuDropdown>
                <MenuDropdown name={"Price"}>
                    <PriceFilter updateFilter={updateFilter} />
                </MenuDropdown>
            </div>
            <div className="products-display">
                {productsElem}
            </div>
        </div>
    )
}


export default React.memo(Products)