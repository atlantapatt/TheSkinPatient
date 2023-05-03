function DeleteAccount({onDelete, setDeleteAccount}) {
    return ( 
        <div>
            <p>ARE YOU SURE YOU WANT TO PERMANENTLY DELETE YOUR ACCOUNT</p>
            <button onClick={(() => setDeleteAccount(false))}>NO</button>
            <button onClick={onDelete}>YES</button>
        </div>
     );
}

export default DeleteAccount;