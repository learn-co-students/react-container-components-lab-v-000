// Code MovieReviews Here
import React, {Component} from 'react'

class MovieReviews extends Component {

    shouldComponentUpdate(nextProps) {
        // console.log(this.props.returnedMovieReviews )
         if(this.props.checkState !== nextProps){
             return true
         } else {
             return false
         }
    }


    render() {
        return this.props.returnedMovieReviews
            
    }
}

export default MovieReviews;