function ConfirmPopUp({setConfirmed}) {
    console.log(setConfirmed)
    return ( 
        <div className="confirmed">
            <h4>Added!</h4>
            <button onClick={(() => setConfirmed(false))}>OK</button>
        </div>
     );
}

export default ConfirmPopUp;