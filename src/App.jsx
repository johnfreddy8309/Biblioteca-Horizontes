import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import libro1 from "./assets/images/libro1.jpg";

// Importación de componentes
import Header from "./components/Header";
import RegistrarUsuario from "./components/RegistrarUsuario";
import BuscarGeneroLiterario from "./components/BuscarGeneroLiterario";
import Recomendaciones from "./components/Recomendaciones";
import GaleriaLibros from "./components/GaleriaLibros";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado global */}
        <Header />

        {/* Contenido principal */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Inicio />
              }
            />
            <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
            <Route path="/buscar-generos" element={<BuscarGeneroLiterario />} />
            <Route path="/recomendaciones" element={<Recomendaciones />} />
            <Route path="/galeria-libros" element={<GaleriaLibros />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Componente de inicio
function Inicio() {
  return (
    <div className="bienvenido-container" style={{ textAlign: "center" }}>
      <h1>Bienvenidos a la Biblioteca Horizontes</h1>
      <p>Explora nuestro catálogo y encuentra tus géneros favoritos.</p>
      <img
        src={libro1}
        alt="Imagen de un libro"
        style={{
          maxWidth: "50%",
          height: "auto",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />
    
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
