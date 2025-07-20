import React from "react";
import { Link, useParams, useSearchParams } from "react-router";

export default function PageFilter({ n }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const pages = Math.ceil(n / 8);
    const displayPages = Array.from({ length: pages }, (_, i) => (
        <li key={i}><Link to={{ pathname: `/shop/p/${i + 1}`, search: searchParams.toString() }}>{i + 1}</Link></li>
    ));
    const { id } = useParams()
    const numericId = parseInt(id, 10)

    return (
        <div className="scroll-pages">
            {numericId > 1 ? (
                <Link to={`/shop/p/${numericId - 1}`}>Previous page</Link>) :
                (<span>Previous page</span>)
            }
            <ol className="page-list">
                {displayPages}
            </ol>
            {numericId < pages ? (
                <Link to={`/shop/p/${numericId + 1}`}>Next page</Link>) :
                (<span>Next page</span>)
            }
        </div>
    )
}