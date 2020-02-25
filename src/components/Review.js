import React from 'react'

const Review = ({display_title, headline, summary_short}) => 
    <li className="review">
        <h3>{display_title}</h3>
        <h4>{headline}</h4>
        <p>{summary_short}</p>
        <br></br>
    </li>

export default Review