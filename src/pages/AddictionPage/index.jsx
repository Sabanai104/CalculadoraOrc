import React, { useState } from 'react';
import PagesContainer from '../../components/PagesContainer';
import './style.css';

const AddictionPage = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [result, setResult] = useState(0);

    const somar = () => {
        setResult(parseInt(number1)+parseInt(number2));
    }

    return (
        <PagesContainer body={
            <section className="AddictionPageContainer">
                <h1 className="AddictionPageTitle">Calculadora Orc</h1>
                <h2 className="AddictionPageTitle2">Soma</h2>
                <section className="AddictionPageInputContainer">
                    <input
                        value={number1}
                        onChange={e => setNumber1(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="AddictionPageInput"
                    />
                    <div className="AddictionPagePlus">+</div>
                    <input
                        value={number2}
                        onChange={e => setNumber2(e.target.value)}
                        placeholder="Digite um número..."
                        type="number"
                        className="AddictionPageInput"
                    />
                    <button onClick={() => somar()} className="AddictionPageButton">Calcular</button>
                </section>

                <div className="AddictionPageResult">A soma de {number1} mais {number2} é igual a {result}</div>
            </section>
        } />
    );
}

export default AddictionPage;
