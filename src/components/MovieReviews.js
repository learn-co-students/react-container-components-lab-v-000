// Code MovieReviews Here
import React, {Component} from 'react'

class MovieReviews extends Component {

    render() {
        return ( 
        <div>
            {this.props.returnedMovieReviews}
        </div>
        )
    }
}

export default MovieReviews;