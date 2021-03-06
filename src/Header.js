import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{ basket, user}] = useStateValue();

   console.log(basket);
      
   const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }




    return (
        <nav className="header">
            {/**logo on the left */}
         <Link to= "/"> 
           <img
             className="header__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt=""
             />
         </Link>
            
            {/**SearchBox */}
            <div className ="header__search">
            <input type="text" className="header__searchInput" />
           <SearchIcon className="header__searchIcon" />
           </div>
            {/**3links */}
            <div className="header__nav">
            {/*1st Link*/ }
            <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> 
            {/*2nd Link*/ }
            <Link to="/" className='header__link'>
               <div className='header__option'>
                 <span className="header_optionLineOne">Returns</span>
                 <span className="header_optionLineTwo">& Orders</span>
               </div>
             </Link>   
            {/*3rd Link*/ }
            <Link to="/" className='header__link'>
               <div className='header__option'>
                 <span className="header_optionLineOne">Your</span>
                 <span className="header_optionLineTwo">Prime</span>
               </div>
             </Link>   
            {/*4th Link*/ }
            <Link to="/checkout" className="header__link">
                <div className='header__optionBasket'>
                    {/* shopping basket icon*/ }
                    <ShoppingBasketIcon />
                    {/*number in the baket*/ }
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            </div>
            {/*Basket icon with number */}
        </nav>
    );
}

export default Header;
