import React from 'react';
import MovieReviews from './MovieReviews';

class LatestMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        reviews: []
    }
  }
  
  componentWillMount(){
    this.fetcReviews();
  }
  
  fetcReviews = () => {
    const NYTIMEKEY = '';
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYTIMEKEY}`)
    .then(res => res.json())
    .then(json => this.setState({reviews: json.results}))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>  
    );
  }
}

export default LatestMovieReviewsContainer;