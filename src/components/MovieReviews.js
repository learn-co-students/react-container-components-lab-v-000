import React from 'react';

class MovieReviews extends React.Component {

    render() {
        let reviews;
        if (this.props.reviews){
            
        reviews = this.props.reviews.map( movie => {
            return (
                <div className="review">
                    <h1>{movie.display_title} <small>{movie.byline}</small></h1>
                    <h3>{movie.headline}</h3>
                    <p>{movie.summary_short}</p>
                </div>
            );
        })
        
        }
        return (
            <div className="review-list">
                {reviews}
            </div>
        )
    }
}
MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews