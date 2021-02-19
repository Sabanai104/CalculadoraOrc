import React, { useState } from 'react';
import PagesContainer from '../../components/PagesContainer';
import './style.css';

const DivisionPage = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [result, setResult] = useState(0);

    const somar = () => {
        setResult(parseInt(number1)/parseInt(number2));
    }

    return (
        <PagesContainer body={
            <section className="DivisionPageContainer">
                <h1 className="DivisionPageTitle">Calculadora Orc</h1>
                <h2 className="DivisionPageTitle2">Divisão</h2>
                <section className="DivisionPageInputContainer">
                    <input
                        value={number1}
                        onChange={e => setNumber1(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="DivisionPageInput"
                    />
                    <div className="DivisionPagePlus">÷</div>
                    <input
                        value={number2}
                        onChange={e => setNumber2(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="DivisionPageInput"
                    />
                    <button onClick={() => somar()} className="DivisionPageButton">Calcular</button>
                </section>

                <div className="DivisionPageResult">A divisão de {number1} por {number2} é igual a {result}</div>
            </section>
        } />
    );
}

export default DivisionPage;