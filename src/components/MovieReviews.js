import React from 'react'

export default function MovieReviews(props) {
    console.log(props)
    return (
        <div className="review-list">
            <ul >
                {props.reviews.map((review, index) => {
                    return <li key={index} className="review">{review.display_title}</li>
                })}
            </ul>
        </div>
    )
}
