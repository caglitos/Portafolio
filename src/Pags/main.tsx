import React, { useState } from "react";

function app() {
  return (
    <>
      <div className="barras">
        <div className="barras1 barra"></div>
        <div className="barras2 barra"></div>
        <div className="barras3 barra"></div>
        <div className="barras4 barra"></div>
        <div className="barras5 barra"></div>
      </div>
      <main>
        <img
          src="https://www.chileclimbers.cl/wp-content/uploads/2019/09/final.jpg"
          alt="Foto mia" // ¡Siempre incluye 'alt' para accesibilidad!
          className="mi-ft" // Clase CSS opcional
        />
        <div className="presentacion">
          <h1>Hola, soy Carlos</h1>
          <h2>Desarrollador Web full-stack</h2>
        </div>
      </main>
    </>
  );
}

export default app;
