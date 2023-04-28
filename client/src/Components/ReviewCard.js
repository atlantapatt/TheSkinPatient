function ReviewCard({review}) {

    return (
        <div className="review-div">
            {/* user avatar?? */}
            <div className="review-text">
                <p>{review.user.username}</p>
                <p>{review.info}</p>
                <p>{review.rating}/5</p>
            </div>
        </div>
     );
}

export default ReviewCard;