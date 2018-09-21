// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
        var a = reviews.map((x, i) => 
            <div key={i} className="review">
                <span>title: {x.display_title}</span><br></br>
                <span>reting: {x.mpas_rating}</span><br></br>
                <span>summary: {x.summary_short}</span><br></br>
            </div>
        )
        return (
            <div  className="review-list">{a}</div>
            )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews