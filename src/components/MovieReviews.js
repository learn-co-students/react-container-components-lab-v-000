import React from 'react'

const MovieReviews = ({reviews}) => {
  const listMovies = () => {
    return reviews.map(function(movieObj){
        return (
        <div className="review">
          <h3>{movieObj.display_title}</h3>
          <p>Critic Score: {movieObj.critics_pick}</p>
          <p><a href={movieObj.link.url}>{movieObj.link.suggested_link_text}</a></p>
        </div>
      )
    })
  }


  return(
    <div className="review-list">
      {listMovies()}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
