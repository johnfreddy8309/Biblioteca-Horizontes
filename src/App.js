import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Imagen1 from "./assets/images/imagen1.jpg";

// Importación de componentes
import Header from "./components/Header";
import RegistrarUsuario from "./components/RegistrarUsuario";
import BuscarGeneroLiterario from "./components/BuscarGeneroLiterario";
import Recomendaciones from "./components/Recomendaciones";
import ListaLibros from "./components/GaleriaLibros";
import Novedades from "./components/Novedades";
import Login from "./components/Login";
import Prestamos from "./components/Prestamos";
import Libro from "./components/Libro";


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
            <Route path="/libros" element={<ListaLibros />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/prestamos" element={<Prestamos/>} />
            <Route path="/libro/:id" element={<Libro />} />
           
           
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Componente de inicio
function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        backgroundColor: 'hsla(36, 33.30%, 88.20%, 0.80)',
        padding: '2rem',
        textAlign: 'center',
        borderRadius: '12px',

      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: 'hsla(38, 88.50%, 30.60%, 0.80)', marginBottom: '1rem' }}>
        Bienvenidos a la Biblioteca Horizontes
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'hsla(38, 91.40%, 22.70%, 0.80)', maxWidth: '600px', marginBottom: '1.5rem' }}>
        Explora nuestro catálogo y encuentra tus géneros favoritos. Tenemos libros para todos los gustos. 
      </p>
      <img
        src={Imagen1}
        alt="Imagen de un libro"
        style={{
          display: 'flex',
          width: '75%',
          maxWidth: '700px',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(8, 0, 0, 0.82)',
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
