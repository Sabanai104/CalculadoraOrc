import React from 'react';
import './style.css';

import PagesContainer from '../../components/PagesContainer';
import Button from '../../components/Button'
const MainPage = () => {
    return (
        <section>
            <PagesContainer body={
                <section className="mainPageContainer"> 
                    <h1 className="mainPageTitle">Calculadora Orc</h1>

                    <div className="mainPageText"> Escolha entre as opções abaixo uma das operações matemáticas que você deseja realizar! </div>

                    <section className="mainPageButtonContainer">
                        <Button className="mainPageButton" to="/Addiction" body="Soma"/> 
                        <Button className="mainPageButton" to="/Subtraction" body="Subtração"/> 
                        <Button className="mainPageButton" to="/Multiplication" body="Multiplicação"/> 
                        <Button className="mainPageButton" to="/Division" body="Divisão"/> 
                    </section>
                </section>
            } />
        </section>
    );
}

export default MainPage;