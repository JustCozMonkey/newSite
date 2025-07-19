import React from "react";
import { useSearchParams } from "react-router";

function PriceFilter({ updateFilter }) {
    const [searchParams] = useSearchParams()
    const currentPrice = Number(searchParams.get("price"))

    return (
        <div className="price-container">
            <label>
                Max price: {currentPrice}
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={currentPrice}
                    onChange={(e) => {
                        updateFilter("price", String(e.target.value))
                    }
                    }
                    style={{ width: "100%" }}
                />
            </label>
        </div>

    )
}

export default React.memo(PriceFilter)