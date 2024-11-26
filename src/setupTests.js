import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
        <div className="app-content">
          <main>
            <Routes>
              {/* Ruta principal */}
              <Route
                path="/"
                element={
                  <div className="bienvenido-container">
                    <h1>Bienvenido a Biblioteca Horizontes</h1>
                  </div>
                }
              />
              <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
              <Route path="/buscar-generos" element={<BuscarGeneroLiterario />} />
              <Route path="/recomendaciones" element={<Recomendaciones />} />
              <Route path="/galeria-libros" element={<GaleriaLibros />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
