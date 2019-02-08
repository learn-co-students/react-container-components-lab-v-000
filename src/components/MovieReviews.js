import React from 'react'

    const MovieReviews = (props) => {
        // console.log("tpr=", this.props.reviews)
        if(props.reviews) {
            return (
                <div className="review-list">
                    <ul >
                        {props.reviews.map((movie, index) => (
                        <li key={index} className="review">
                            {movie.display_title}
                        </li>    
                    ))}
                </ul>
            </div>)
            }
        }

    export default MovieReviews;


// class MovieReviews extends React.Component {

//     render() {
//         return (
//         <ul className="review-list" >
//             {this.props.reviews.map((movie, index) => (
//                 <li key={index} className="review">
//                     {movie.display_title}
//                     {/* {movie.mpaa_rating}
//                     {movie.critics_pick}
//                     {movie.byline}
//                     {movie.headline}
//                     {movie.summary_short}
//                     {movie.publication_date}
//                     {movie.opening_date}
//                     {movie.date_updated}
//                     {movie.link}
//                     {movie.multimedia} */}
//                 </li>    
//             ))}
//         </ul>
//         )
//     }

// }

// export default MovieReviews;
