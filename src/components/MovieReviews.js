import React from "react";
// Code MovieReviews Here

const MovieReviews = (props)=> (
  <div className="review-list">
    {props.reviews.map((reviewData, index)=> {
      const { headline, link, multimedia, summary_short } = reviewData
      return(
        <div className="review" key={index.toString()}>
          <h4><a href={link.url}>{headline}</a></h4>
          <img src={multimedia.src} alt="face" width={multimedia.width} height={multimedia.height}/>
          <p>{summary_short}</p>
        </div>
      )
    })}
  </div>
)
export default MovieReviews
/*   ______________________
   /                        \
  | R.I.P. Review component  |
  |       2021-2021          |
  |     Cause of rip:        |
  |    bad test design       |
  |                          |
-----------------------------------------------------------

const Review = ({data})=> {
  const {headline, link, multimedia, summary_short} = data
  return(
    <div className="review">
      <h4><a href={link.url}>{headline}</a></h4>
      <img src={multimedia.src} alt="face"
      width={multimedia.width}
      height={multimedia.height} />
      <p>{summary_short}</p>
    </div>
  )
}
-------------------------------------------------------------- */