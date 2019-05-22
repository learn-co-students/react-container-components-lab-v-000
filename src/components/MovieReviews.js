import React, {Component } from 'react';
import 'isomorphic-fetch';

const MovieReviews = (props) => (

  <div className={'review-list'}>
    <ul>
      {props.reviews.map(c => (
        <div className={'review'}>
          <li>
            <div key={c.results}>
              {c.display_title} - {c.mpaa_rating}
            </div>
        </li>
      </div>

      ))}
    </ul>
  </div>
)
MovieReviews.defaultProps = {
  reviews: [],
}



export default MovieReviews
