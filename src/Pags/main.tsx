import Barras from "../Components/barras";

function app() {
  return (
    <>
      <Barras />
      <main>
        <img
          src="https://www.chileclimbers.cl/wp-content/uploads/2019/09/final.jpg"
          alt="Foto mia"
          className="mi-ft"
        />
        <div className="container">
          <div className="presentacion">
            <h1>¡Hola!, soy Carlos</h1>
            <h2>Desarrollador Web Full-Stack</h2>
          </div>
          <button className="btn">Sobre mi</button>
        </div>
      </main>
    </>
  );
}

export default app;
