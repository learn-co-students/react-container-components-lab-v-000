// Code MovieReviews Here
import React from 'react'

// class MovieReviews extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         let myReviews = this.props.reviews.map((review)=>
//             <div className="review">
//                 <h3>{review.display_title}</h3>
//                 <h4>Reviewed by: {review.byline}</h4>
//                 <p>{review.summary_short}</p>
//             </div>
//         )
//         return(
//             <div className="review-list">
//                 {myReviews}
//             </div>
//         )
//     }
// }

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map((review)=>
            <div className="review">
            <h3>{review.display_title}</h3>
            <h4>Reviewed by: {review.byline}</h4>
            <p>{review.summary_short}</p>
        </div>)}
    </div>
)

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews