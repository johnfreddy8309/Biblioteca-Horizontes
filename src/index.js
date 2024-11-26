// Importamos las dependencias necesarias
import React from 'react'; // Biblioteca principal de React
import ReactDOM from 'react-dom/client'; // Herramientas para renderizar React en el DOM
import './index.css'; // Archivo de estilos globales
import reportWebVitals from './reportWebVitals'; // Herramienta para medir el rendimiento de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap para usar componentes y clases predefinidas
import App from './App'; // Componente principal de la aplicación

// Creamos el punto de entrada para renderizar nuestra aplicación
const root = ReactDOM.createRoot(document.getElementById('root')); // Selecciona el elemento con id "root" en el archivo HTML

// Renderizamos la aplicación dentro del modo estricto de React
root.render(
  <React.StrictMode>
    <App /> {/* Componente principal que contiene toda la lógica y componentes de la aplicación */}
  </React.StrictMode>
);

// Ejecuta la función para medir el rendimiento (opcional)
reportWebVitals();
// Esta función puede ser utilizada para registrar métricas de rendimiento, como tiempos de carga
// Es útil en entornos de desarrollo para optimizar el rendimiento
