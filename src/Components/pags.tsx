import Barras from "./barras";

const jamon = (jamon: string) => {
  console.log(`${jamon}`);
};

jamon("jamon");

function redirect(where: string) {
  return (window.location.href = `/${where}`);
}

export const Home: React.FC = () => {
  return (
    <>
      <Barras />
      <main>
        <img
          src="https://www.chileclimbers.cl/wp-content/uploads/2019/09/final.jpg"
          alt="Foto mia"
          className="mi-ft"
        />
        <div>
          <div className="presentacion">
            <h1>¡Hola!, soy Carlos</h1>
            <h2>Desarrollador Web Full-Stack</h2>
          </div>
          <button className="btn" onClick={() => redirect("about")}>
            Sobre Mi
          </button>
        </div>
      </main>
    </>
  );
};

export const About: React.FC = () => {
  return (
    <>
      <Barras />
      <main></main>
    </>
  );
};
