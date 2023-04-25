import { useHistory } from "react-router-dom";

function Navbar() {

    const history = useHistory()

    function myAccountRoute() {
        // let account = '/account'
        // history.push(account)
        console.log('account')
    }
    return ( 
        <div className="nav">
            <div className="nav-items">
                <p>Welcome!</p>
                <div className="img">
                    LOGO
                </div>
                <div className="dropdown-trigger">
                    ICON
                </div>
                <div className="dropdown-menu">
                    <p onClick={myAccountRoute}>Account</p>
                    <p>Products</p>
                    <p>Logout</p>
                </div>
            </div>
        </div>
     );
}

export default Navbar;