import { useEffect, useState } from 'react';
import './CSS/ReviewCard.css'
function ReviewCard({review}) {
    const [username, setUsername] = useState('')
    
    useEffect(() => {
        if (review.user !== null) {
            setUsername(review.user.username)
        }
    })
    console.log(username)

//review.user.username causing errors
    return (
        <div className="review-div">
            <div className="review-text">
                {/* <p>{review.user.username}</p> */}
                <p>{review.info}</p>
                <p>{review.rating}/5</p>
            </div>
        </div>
     );
}

export default ReviewCard;