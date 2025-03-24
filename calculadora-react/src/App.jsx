import { useState } from 'react';
import Calculadora from './components/Calculadora/Calculadora';
import Todo from './components/Todo/Todo';
import RegistroEstudiantes from './components/Estudiantes/RegistroEstudiantes';
import './App.css';

function App() {
    return (
        <>
            <h1>Calculadora</h1>
            <Calculadora />
            <Todo />
            <RegistroEstudiantes/>
        </>
    );
}

export default App;

