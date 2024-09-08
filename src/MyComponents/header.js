import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <h1>To-Do List</h1>
                </div>
                <nav className="navbar">
                    <ul>
                        <Link to="/" className="active">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <br /><br /><br /><br />
        </header>
    );
}
// #endregion

export default Header;