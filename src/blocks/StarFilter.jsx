import React from "react";
import { useSearchParams } from "react-router";

function StarFilter({ updateFilter }) {

    const [hover, setHover] = React.useState(0);
    const [searchParams] = useSearchParams()
    const currentPrice = Number(searchParams.get("rating")) || 0

    return (
        <div className="rating">
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={star <= (hover || currentPrice) ? 'star selected' : 'star'}
                        onClick={() => {
                            if (currentPrice === star) {
                                updateFilter("rating", "")
                                setHover(0)
                            } else {

                                updateFilter("rating", String(star))
                            }
                        }}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p>Selected score: {currentPrice}</p>
        </div>
    )

}

export default React.memo(StarFilter)