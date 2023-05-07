import { useHistory } from "react-router-dom";
import './Components/CSS/Navbar.css'
import { useState } from "react";
import DropdownMenu from "./Components/DropdownMenu";
import logo from './skinlogo.png'

function Navbar({setUser, setUserId, user}) {
    const [open, setOpen] = useState(false)

    const history = useHistory()

    function isOpen() {
        setOpen(!open)
    }

    function homeRoute() {
        let path = '/home'
        history.push(path)
        console.log('home')
        setOpen(false)
      }

    function myAccountRoute() {
        let account = '/account'
        history.push(account)
        console.log('account')
        setOpen(false)
    }

    function productsRoute() {
        let path = '/allproducts'
        history.push(path)
        console.log('products')
        setOpen(false)
    }

    function logout() {
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                setUserId(null)
            }
        })
        console.log('logout')
    }
    return ( 
        <div className="nav">
            <div className="nav-items">
                <div className="welcome-div">
                    <p>Welcome {user.username}!</p>
                </div>
                <div className="img" onClick={homeRoute}>
                    <img id="skin-logo" src={logo}></img>
                </div>
                <div className="dropdown-trigger" onClick={() => {setOpen(!open)}}>
                    <i class={open ? "fa-solid fa-bars fa-rotate-90" : "fa-solid fa-bars"}></i>
                </div>
                <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                    <ul>
                    <DropdownMenu icon='fa-solid fa-house' click={homeRoute} text="Home" />
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
