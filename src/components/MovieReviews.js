import React from 'react'
import MovieReview from './MovieReview.js'

const MovieReviews = (props) => {
  const ifNode = (node, prop) => { if (node) return node[prop] }
  const titleCase = name => { return name.toLowerCase().split(" ").map(n => n[0].toUpperCase() + n.slice(1)).join(" ") }
  
  return (
    <div className="review-list">
      <ol>
        {props.reviews.map((review, i) => <li className="review" id={"review-" + i} key={i} style={{ clear: "left" }}>
          <a style={{ fontSize: '20px' }} href={ifNode(review.link, 'url')} target="_blank">{review.display_title}</a> - <em>{titleCase(review.byline)}</em>
          <div>
            <div style={{ float: 'left' }}>
              <img className="mr-2 my-2" src={ifNode(review.multimedia, 'src')} alt={review.dislay_title} />
            </div>
            <div className="small col-8">{review.summary_short}</div>
          </div>
        </li>) }
        {/* { props.reviews.map((review, i) => <MovieReview review={review} key={i} i={i} />) } */}
      </ol>
    </div>
  )
}

export default MovieReviews