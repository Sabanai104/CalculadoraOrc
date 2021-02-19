import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Header from './components/Header';
import AddictionPage from './pages/AddictionPage';
import SubtractionPage from './pages/SubtractionPage';
import MultiplicationPage from './pages/MultiplicationPage';
import DivisionPage from './pages/DivisionPage';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/Addiction'  component={AddictionPage} />
                <Route path='/Subtraction'  component={SubtractionPage} />
                <Route path='/Multiplication'  component={MultiplicationPage} />
                <Route path='/Division'  component={DivisionPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;