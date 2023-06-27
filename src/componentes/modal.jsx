import React, { useState } from 'react';

function Modal({ children, estado, cambiarEstado, onRegistroEstudiante }) {
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [carreraEstudiante, setCarreraEstudiante] = useState('');

  const handleRegistro = () => {
    const estudiante = {
      nombre: nombreEstudiante,
      carrera: carreraEstudiante,
    };

    if (typeof onRegistroEstudiante === 'function') {
      onRegistroEstudiante(estudiante);
    }

    cambiarEstado(false);
  };

  return (
    <>
      {estado && (
        <div className={'fondoModal'}>
          <div className={'contenedor-modal'}>
            <form className={'formulario'}>
              <h3>Registrar Estudiante</h3>
              <input
                type="text"
                className={'input-basico'}
                placeholder="Nombre Completo"
                value={nombreEstudiante}
                onChange={(e) => setNombreEstudiante(e.target.value)}
              />
              <input
                type="text"
                className={'input-basico'}
                placeholder="Carrera"
                value={carreraEstudiante}
                onChange={(e) => setCarreraEstudiante(e.target.value)}
              />
              <input
                type="button"
                className={'input-registrar'}
                value="REGISTRAR ESTUDIANTE"
                onClick={handleRegistro}
              />
            </form>
            <button className={'boton-cerrar'} onClick={() => cambiarEstado(false)}>
              x
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
