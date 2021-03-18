import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '7pC8d2iDRSyEeIuw3ROxJn8Gk329B80k';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            })
    }

    onChange = (event) => {
        console.log(this.state.searchTerm)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
             fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            })
    }
    render() {
        return (
        <div>
            <form>
            <input name="searchTerm" type="text" onChange={this.onChange} value={this.state.searchTerm}/>
            <button name="submit" type="submit" onClick={() => this.handleClick}>Submit</button>
            </form>
            <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
        </div>)
        }
    }