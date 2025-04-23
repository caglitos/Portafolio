import Button from "../componets/button";

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
        <div className="presentacion">
          <h1>Hola, soy Carlos</h1>
          <h2>Desarrollador Web full-stack</h2>
          <Button text="Sobre Mi" href="AboutMe" />
        </div>
      </main>
    </>
  );
}

export default app;
