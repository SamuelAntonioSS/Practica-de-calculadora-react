import { useState } from 'react';
import Calculadora from './components/Calculadora/Calculadora';
import Todo from './components/Todo/Todo';
import './App.css';

function App() {
    return (
        <>
            <h1>Calculadora</h1>
            <Calculadora />
            <Todo />
        </>
    );
}

export default App;

