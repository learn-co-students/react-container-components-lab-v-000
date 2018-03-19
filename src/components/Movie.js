
import React from 'react';

const Movie = ({display_title, mpaa_rating, headline, short_summary, multimedia}) => {
  return (
    <div key={headline} className="review">
      <h3> {display_title} </h3>
      <img src= {multimedia === null ? null : multimedia.src } alt={multimedia === null? null : {display_title} }/>
      <p> {headline} <br/>
          {short_summary} <br/>
          {mpaa_rating} <br/>
      </p>
    </div>
  )
}

export default Movie;
