// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className='review-list'>
            {reviews.map(({ headline, byline, link, summary_short }) => {
                return (
                    <div key={headline} className='review'>
                        <header>
                            <a href={link.url}>{headline}</a>
                            <br/>
                            <span className="author">{byline}</span>
                        </header>
                        <blockquote>{summary_short}</blockquote>
                    </div>
                )
            })}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews

// alternative is to create a separate helper function Review and pass as a parameter in reviews.map in MovieReviews

// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

// const Review = ({
//     headline,
//     byline,
//     link,
//     summary_short
//   }) => {

//     return (
//         <div key={headline} className='review'>
//             <header>
//                 <a href={link.url}>{headline}</a>
//                 <br/>
//                 <span className="author">{byline}</span>
//             </header>
//             <blockquote>{summary_short}</blockquote>
//         </div>
//     )
// }

// export default MovieReviews