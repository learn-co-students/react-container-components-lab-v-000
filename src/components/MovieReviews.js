// Code MovieReviews Here
import React from 'react'

class MovieReviews extends React.Component {
    render(){
        let myReviews = this.props.reviews.map((review)=>
            <div className="review">
                <h3>{review.display_title}</h3>
                <h4></h4>
            </div>
        )
        return(
            <div className="review-list">

            </div>
        )
    }
}

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews