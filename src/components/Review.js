import React from 'react'

const Review = ({display_title, headline, summary_short, link}) => {
  return(
    <div className="review" key={display_title}>
      <a href={link.url}>
        <h3>{display_title} - {headline} </h3>
      </a>
      <p>{summary_short}</p>
    </div>
  )
}

export default Review