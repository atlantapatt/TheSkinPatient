import { useHistory } from "react-router-dom";
import './Components/CSS/Navbar.css'
import { useState } from "react";
import DropdownMenu from "./Components/DropdownMenu";

function Navbar() {
    const [open, setOpen] = useState(false)

    const history = useHistory()

    function isOpen() {
        setOpen(!open)
    }

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
                <div className="dropdown-trigger" onClick={() => {setOpen(!open)}}>
                    <i class={open ? "fa-solid fa-bars fa-rotate-90" : "fa-solid fa-bars"}></i>
                </div>
                <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                    <ul>
                        <DropdownMenu icon='fa-solid fa-user' click={myAccountRoute} text="Account" />
                        <DropdownMenu icon='fa-solid fa-bottle-droplet' click={productsRoute} text="Products" />
                        <DropdownMenu icon='fa-solid fa-right-from-bracket' click={logout} text="Logout" />
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Navbar;
<i class="fa-solid fa-bars fa-rotate-180"></i>
