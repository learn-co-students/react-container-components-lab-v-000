import React from 'react'

const Review = ({display_title, mpaa_rating, headline, summary_short, link}) => {
  return(
  <div className="review" key={display_title}>
    <a href={link.url}>
      <h3>{display_title} - {headline} - {mpaa_rating}</h3>
    </a>
    <p>{summary_short}</p>
  </div>
)
}

export default Review
