import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import capacete from '../../assets/capacete.png';

const Header = () => {
    return (
        <section className="header">
            <Link to="/"><img className="capaceteImg" src={capacete} alt="Orc'estra" /></Link>
        </section>
    );
}

export default Header;