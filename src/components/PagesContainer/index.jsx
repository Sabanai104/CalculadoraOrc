import React from 'react';
import './style.css';

const PagesContainer = ({body}) => {
    return (
        <section className="containerBorder">
            {body}
        </section>
    );
}

export default PagesContainer;