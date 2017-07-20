// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
    `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
	constructor(){
		super ()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}
  
  changeBox =(value)=>{
  	this.setState({
  		searchTerm: value
  	})
  }

  ComponntentWillMount =()=>{
		fetch(URL)
		  .then((res => this.setState({
		  	reviews: res
		  })))
	}

  render(){
  	return(
  		<div className='searchable-movie-reviews'>
  			<MovieReviews reviews={this.state.reviews} />
  		</div>
  	)
  } 
}