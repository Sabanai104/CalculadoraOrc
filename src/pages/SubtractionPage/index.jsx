import React, { useState } from 'react';
import PagesContainer from '../../components/PagesContainer';
import './style.css';

const SubtractionPage = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [result, setResult] = useState(0);

    const subtrair = () => {
        setResult(parseInt(number1)-parseInt(number2));
    }

    return (
        <PagesContainer body={
            <section className="SubtractionPageContainer">
                <h1 className="SubtractionPageTitle">Calculadora Orc</h1>
                <h2 className="SubtractionPageTitle2">Subtração</h2>
                <section className="SubtractionPageInputContainer">
                    <input
                        value={number1}
                        onChange={e => setNumber1(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="SubtractionPageInput"
                    />
                    <div className="SubtractionPagePlus">-</div>
                    <input
                        value={number2}
                        onChange={e => setNumber2(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="SubtractionPageInput"
                    />
                    <button onClick={() => subtrair()} className="SubtractionPageButton">Calcular</button>
                </section>

                <div className="SubtractionPageResult">A subtração de {number1} menos {number2} é igual a {result}</div>
            </section>
        } />
    );
}

export default SubtractionPage;
