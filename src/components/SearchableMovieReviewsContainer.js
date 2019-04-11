import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pgo9sXSBs4LprdgUU33XnDLqACTn62IA';

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    };

    searchReviews = (query) => {
        fetch(URL + `${query}&` + `api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then((data) => {
        this.setState ({reviews: data.results.map(review => (
            {
                title: review.display_title,
                summary: review.summary_short,
                link: review.link.url,
                cta: review.link.suggested_link_text
            })) 
            })
        })
    }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.searchReviews(this.state.searchTerm)
      }
    
      handleChange = event => {
        this.setState({
          searchTerm: event.target.value,
        });
      }


    render() {
        return (
            <div className="searchable-movie-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="Search Query"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}