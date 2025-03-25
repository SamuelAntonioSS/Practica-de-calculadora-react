import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router'

import Home from './pages/Home';
import About from './pages/About'
import Nav from './components/Nav'
import Contact from './pages/Contact'

import Calculadora from './components/Calculadora/Calculadora';
import Todo from './components/Todo/Todo';
import RegistroEstudiantes from './components/Estudiantes/RegistroEstudiantes';
import './App.css';

function App() {
    return (
        <>
         <Router>
            <Nav/>
            

           
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/calculadora" element={<Calculadora />} />
                    <Route path="/registroestudiantes" element={<RegistroEstudiantes />} />
                    <Route path="/todo" element={<Todo />} />



                    </Routes>
                    <h1>Calculadora</h1>
           
            </Router>

        </>
        

    );
}

export default App;

/*
            <Calculadora/>
             <Todo />
            <RegistroEstudiantes/>

*/ 

