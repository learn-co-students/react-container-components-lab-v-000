import React from 'react'

const MovieReviews = ({reviews}) => {
  this.listMovies = () => {
    console.log(reviews)
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
      {this.listMovies()}
    </div>
  )
}

export default MovieReviews
