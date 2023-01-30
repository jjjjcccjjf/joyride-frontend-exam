import "./styles.scss"

import { Skeleton } from "@mui/material"

export default function MovieSkeleton() {
    return (
        <figure className='movie-card'>

            <Skeleton className="skeleton-image" variant="rectangular" />
            <div>
                <Skeleton className="skeleton-h2" variant="rectangular" width={100} />
                <Skeleton className="skeleton-p" variant="rectangular" width={100} />
            </div>
        </figure>

    )
} 