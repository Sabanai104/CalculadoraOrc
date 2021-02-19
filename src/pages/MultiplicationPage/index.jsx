import React, { useState } from 'react';
import PagesContainer from '../../components/PagesContainer';
import './style.css';

const MultiplicationPage = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [result, setResult] = useState(0);

    const somar = () => {
        setResult(parseInt(number1)*parseInt(number2));
    }

    return (
        <PagesContainer body={
            <section className="MultiplicationPageContainer">
                <h1 className="MultiplicationPageTitle">Calculadora Orc</h1>
                <h2 className="MultiplicationPageTitle2">Multiplicação</h2>
                <section className="MultiplicationPageInputContainer">
                    <input
                        value={number1}
                        onChange={e => setNumber1(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="MultiplicationPageInput"
                    />
                    <div className="MultiplicationPagePlus">X</div>
                    <input
                        value={number2}
                        onChange={e => setNumber2(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="MultiplicationPageInput"
                    />
                    <button onClick={() => somar()} className="MultiplicationPageButton">Calcular</button>
                </section>

                <div className="MultiplicationPageResult">A multiplicação de {number1} vezes {number2} é igual a {result}</div>
            </section>
        } />
    );
}

export default MultiplicationPage;