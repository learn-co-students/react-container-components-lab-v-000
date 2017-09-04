// Code MovieReviews Here
import React from 'react';

const Book = ({ title, img_url }) => {
  return (
    <div className="book">
      <img src={img_url} />
      <h3>{title}</h3>
    </div>
  )
}

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map(book => <Book title="book.title" img_url="book.image_url" />)}
  </div>
);

const MovieReview = ({ display_title, byline, summary_short }) => {
  return(
    <div className="review">
      <p>{display_title}</p>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
}
const MovieReviewList = ({movieReviews}) => {
  <div className="review-list">
    {movieReviews.map(movieReview => <MovieReview
      display_title={movieReview.display_title}
      byline={movieReview.byline}
      summary_short={movieReview.summary_short}
      />
    )}
  </div>
}


export default class MovieReviews extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <MovieReviewList movieReviews={this.props.movieReviews} />
    );
  }
}
