// Importamos las dependencias necesarias
import React from 'react'; // Biblioteca principal de React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Componente para manejar las rutas
import ReactDOM from 'react-dom'; // Para renderizar en el DOM
import Header from './components/Header'; // Componente de encabezado personalizado
import RegistrarUsuario from './components/RegistrarUsuario'; // Componente para registrar un usuario
import BuscarGeneroLiterario from './components/BuscarGeneroLiterario'; // Componente para buscar géneros literarios 
import Recomendaciones from './components/Recomendaciones'; // Componente para recomendaciones
import Carrusel from './components/Carrusel'; // Componente del carrusel
import BotonBienvenidos from './components/BotonBienvenidos';
import './App.css'; // Archivo CSS para estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap

// Componente principal de la aplicación
function App() {
  return (
    // Envolvemos la aplicación dentro del enrutador para habilitar la navegación
    <Router>
      <div className="App">
        {/* Encabezado visible en todas las páginas */}
        <Header />
        <main>
          <BotonBienvenidos />
          <Routes>
            {/* Ruta principal que muestra el carrusel */}
            <Route path="/" element={<Carrusel />} />

            {/* Rutas adicionales para otras vistas */}
            <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
            <Route path="/buscar-generos" element={<BuscarGeneroLiterario />} />
            <Route path="/recomendaciones" element={<Recomendaciones />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Renderizamos el componente principal en el DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de que 'root' existe en tu archivo HTML
);

export default App;
