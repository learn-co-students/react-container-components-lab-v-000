// Code MovieReviews Here, stateless, functional 
// <div className="review">reviewList</div>

import React from 'react';
//where would beforeEach() hook go? 

const Review = ({ headline, byline, link, summary_short }) => {
  return (

    <section className="review-list">
          <div key={headline} className="review"> 
            <header>
              <a className="review-link" href= {link.url}>
               {headline}
               </a>
               <br/>
               <div className="author"> {byline} </div>
              </header>
              <blockquote> {summary_short} </blockquote>
          </div>
    </section>
)};

const MovieReviews = ({ reviews }) => {
  return 
  <div className="review-list">
    {reviews.map(Review)}
  </div>
}

MovieReviews.defaultProps = {
  reviews: []
  };


export default MovieReviews;
