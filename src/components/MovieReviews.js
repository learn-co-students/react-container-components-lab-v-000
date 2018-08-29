// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
  if (props.reviews.length > 0) {
    return (
      <div className="review-list">
        {props.reviews.map(({display_title, headline, byline, summary_short, link, multimedia}, index) => {
          return (
          <div key={index} className="review">
            {multimedia ? <img src={multimedia.src} alt={display_title} /> : null }
            <ul>
              <li>{headline}</li>
              <li>By {byline}</li>
              <li>{summary_short}</li>
              <li><a href={link.url}>{link.suggested_link_text}</a></li>
            </ul>
          </div>
          )
        })}
      </div>
    )
  } else {
    return (<p>No Movies Found</p>)
  }
 
}

export default MovieReviews