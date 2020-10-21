import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header =()=> {
    return (
        <div className="header">
            <div className="header__left">
                <Link to = "/"><img className="header__logo" src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1604/sergeypykhonin160400034/55349020-restaurant-diner-vector-logo-dish-meal-food-or-chef-icon.jpg" alt="Logo" />
                </Link>
                <h1>Edumato</h1>
            </div>
            <div className="header__right">
                <button className="login">login</button>
                <button className="Create__account">Create Account</button>    
            </div>
        </div>
    )
}

export default Header;
