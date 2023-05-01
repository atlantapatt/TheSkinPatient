import './CSS/WriteReview.css'
function WriteReview({addToReview, setRating, setInfo}) {

    
    return ( 
        <div className="user-review">
            <form className='review-form'>
                <div className="radio">
                    <lable>1</lable>
                    <input id="radio" type="radio" value='1' name="rating" onClick={((e) => setRating(e.target.value))}></input>
                    <lable>2</lable>
                    <input id="radio" type="radio" value='2' name="rating" onClick={((e) => setRating(e.target.value))}></input>
                    <lable>3</lable>
                    <input id="radio" type="radio" value='3' name="rating" onClick={((e) => setRating(e.target.value))}></input>
                    <lable>4</lable>
                    <input id="radio" type="radio" value='4' name="rating" onClick={((e) => setRating(e.target.value))}></input>
                    <lable>5</lable>
                    <input id="radio" type="radio" value='5' name="rating" onClick={((e) => setRating(e.target.value))}></input>    
                </div>
                <textarea id="text" onChange={((e) => setInfo(e.target.value))} placeholder="Write Review Here..."></textarea>
                <button onClick={addToReview}>Submit</button>
            </form>
        </div>
     );
}

export default WriteReview;