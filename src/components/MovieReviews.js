import React from 'react';

const Review = ({multimedia, display_title, headline, link}) => {

    return(
      <div key={headline} className="review">

        <div>{display_title}</div>
        <a href={link.url}>{headline}</a><br />
      </div>
    )
}

const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )

}
MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;


// const renderReviews = reviews.map((review, i) => {
//   return(
//     <Review key={i} multimedia={review.multimedia} display_title={review.display_title} link={review.link} headline={review.headline} />
//   )
//
// })
// const renderMovies = this.state.reviews.map((review, i) =>
//   <MovieReview articleUrl={review.link.url} imgsrc={review.multimedia.src} headline={review.headline} title={review.display_title} key={i} />
// );
