import { useHistory } from "react-router-dom";
import './Components/CSS/Navbar.css'

function Navbar() {

    const history = useHistory()


    function homeRoute() {
        let path = '/'
        history.push(path)
        console.log('home')
    }

    function myAccountRoute() {
        let account = '/account'
        history.push(account)
        console.log('account')
    }

    function productsRoute() {
        let path = '/products'
        history.push(path)
        console.log('products')
    }

    function logout() {
        console.log('logout')
    }
    return ( 
        <div className="nav">
            <div className="nav-items">
                <div className="welcome-div">
                    <p>Welcome!</p>
                </div>
                <div className="img" onClick={homeRoute}>
                    <p>LOGO</p>
                </div>
                <div className="dropdown-trigger">
                    <p>ICON</p>
                </div>
                {/* <div className="dropdown-menu">
                    <p onClick={myAccountRoute}>Account</p>
                    <p onClick={productsRoute}>Products</p>
                    <p onClick={logout}>Logout</p>
                </div> */}
            </div>
        </div>
     );
}

export default Navbar;