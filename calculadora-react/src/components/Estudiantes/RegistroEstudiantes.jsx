import React, { useState } from "react";
import "./RegistroEstudiantes.css"; // Asegúrate de tener un archivo CSS

const RegistroEstudiantes = () => {
    // Estado para manejar los datos del formulario
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    
    // Estado para manejar la lista de estudiantes
    const [estudiantes, setEstudiantes] = useState([]);

    // Función para agregar un estudiante a la lista
    const agregarEstudiante = () => {
        if (!nombre || !edad || !carnet) return; // Validar que todos los campos estén llenos

        const nuevoEstudiante = {
            id: Date.now(),
            nombre,
            edad,
            carnet
        };

        setEstudiantes([...estudiantes, nuevoEstudiante]); // Agregar el nuevo estudiante
        setNombre(""); // Limpiar los campos
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="registro-container">
            <h1>Registro de Estudiantes</h1>
            <div className="registro-form">
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    placeholder="Edad"
                />
                <input
                    type="text"
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                    placeholder="Carnet"
                />
                <button onClick={agregarEstudiante}>Agregar Estudiante</button>
            </div>

            <ul className="estudiantes-lista">
                {estudiantes.map((estudiante) => (
                    <li key={estudiante.id}>
                        <p>Nombre: {estudiante.nombre}</p>
                        <p>Edad: {estudiante.edad}</p>
                        <p>Carnet: {estudiante.carnet}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistroEstudiantes;
