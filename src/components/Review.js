import React from 'react'

const Review = ({display_title, headline, summary_short}) => 
    <li className="review">
        <h2>{display_title}</h2>
        <h3>{headline}</h3>
        <p>{summary_short}</p>
        <br></br>
    </li>

export default Review