import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Para los estilos del submenú

const Header = ({ onInicioClick }) => {
  return (
    <header className="custom-header">
      <div className="container">
        <h1 className="display-4">Biblioteca Horizontes</h1>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <span className="nav-link text-white dropdown-toggle" role="button">
                Inicio
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/" onClick={onInicioClick}>
                    {/* Contenido del enlace */}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registrar-usuario">Registrar Usuario</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/buscar-generos">Buscar Géneros Literarios</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Recomendaciones">Recomendaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Novedades">Novedades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Categorias">Categorías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Historial-busqueda">Historial de búsqueda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Favoritos">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Configuracion">Configuración</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Cerrar">Cerrar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;