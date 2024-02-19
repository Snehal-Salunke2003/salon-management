import ReviewsComponent from "../components/ReviewsComponent";
import React from "react";

function Review(props){
    return(<div className='page2'><section className='reviews' id='reviews'>
    <h2>Reviews</h2>      
    <ReviewsComponent placeId={props.placeId} apiKey={props.apiKey}/>
    </section>
    </div>)
}
export default Review;