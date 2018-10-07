import React from 'react';

const MovieReviews = ({reviews}) => {

  return <div className="review-list">{ createListItems(reviews) }</div>

}



function createListItems(reviews){
  return reviews.map( (r) => <div className='review'><ul>
                                <li>{r.display_title}</li>
                                <li>{r.byline}</li>
                                <li>{r.link.url}</li>
                              </ul></div>  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
