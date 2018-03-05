import React from 'react'

class MovieReview extends React.Component {
  render () {
    const divStyle = {
      backgroundColor: '#adccff',
      padding: "5px",
      margin: "15px",
      width: "275px",
    }

    return (
      <div className="review" style={divStyle}>
        <h4>Title: {this.props.review.display_title}</h4>
        {this.props.review.multimedia &&
          <img src={this.props.review.multimedia.src} height={this.props.review.multimedia.height} width={this.props.review.multimedia.width} alt={this.props.review.display_title} />
        }
        <p>{this.props.review.summary_short}</p>
      </div>
    )
  }
}

export default MovieReview;
