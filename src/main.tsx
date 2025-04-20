import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './Pags/main'

function contenido() {
   const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  console.log(page);

  let contenido;
  switch (page) {
    case "main":
      contenido = <App />;
    break;
    default:
      contenido = <App />;
    break;
  }

  return contenido;
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {contenido()}
  </StrictMode>,
)
