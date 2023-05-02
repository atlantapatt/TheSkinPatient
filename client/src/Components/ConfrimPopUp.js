function ConfirmPopUp({setConfirmed}) {
    return ( 
        <div className="confirmed">
            <h4>Added!</h4>
            <button onClick={(() => setConfirmed(false))}>OK</button>
        </div>
     );
}

export default ConfirmPopUp;