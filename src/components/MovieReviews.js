// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props){
    return (
        <div className="review-list">
           
                {props.reviews.map((mov)=>{
                    return (<div className="review">
                        <h2>{mov.display_title}</h2>
                        <h4>{mov.byline}</h4>
                        <p>{mov.summary_short}</p>
                    </div>
                )})}
            
            
        </div>
        
        
        )
    
    
    
}