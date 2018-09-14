// Code MovieReviews Here
import React, {Component} from 'react'

const MovieReviews = props => {
    debugger
    let movieList;
    if( props.searchedMovieReviews !== undefined && props.searchedMovieReviews.length ){
        movieList = props.searchedMovieReviews
    } else {
        movieList = props.returnedMovieReviews
    }

    return <div className='review-list'>{movieList}</div> 
}


export default MovieReviews;