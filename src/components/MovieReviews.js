import React from 'react'

const Review = ({ title, summary, link, cta }) => (
    <div className="review">
      <h3>{ title }</h3>
      <p>{ summary }</p>
      <a href={ link } target="_blank">{ cta }</a>
    </div>
  )
   
   
  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
       {reviews.map((review, index) => 
            <div className="Card"  key={index}> 
                <Review 
                title={review.title} 
                summary={review.summary}
                link={review.link}
                cta={review.cta}
                />
            </div>)}
    </div>
  )

export default MovieReviews
