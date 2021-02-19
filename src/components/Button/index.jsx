import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Button = ({body, className, to}) => {
    return (
        <Link className={className} to={to}>{body}</Link>
    );
}

export default Button;