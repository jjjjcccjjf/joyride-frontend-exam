import './styles.scss'

import { Skeleton } from '@mui/material'

const MovieSkeletonCard = () => {
  return (
        <figure className='movie-card'>
            <Skeleton className="skeleton-image" variant="rectangular" />
            <div>
                <Skeleton className="skeleton-h2" variant="rectangular" width={100} />
                <div>
                    <Skeleton className="skeleton-p" variant="rectangular" width={100} />
                </div>
            </div>
        </figure>
  )
}

export default function MovieSkeleton () {
  return (
        <>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
            <MovieSkeletonCard></MovieSkeletonCard>
        </>
  )
}
