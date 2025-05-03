import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onInicioClick }) => {
  return (
    <header className="custom-header py-3 shadow">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h1 className="display-5 fw-bold text-white mb-3 mb-md-0">
          <img
            src={require("../assets/images/libro1.jpg")} // ajusta la ruta
            alt="Logo de la biblioteca"
            style={{
              width: "180px",
              height: "auto",
              marginRight: "10px",

              marginLeft: "-50px",
              verticalAlign: "middle",
            }}
          />
        </h1>
        <nav>
          <ul className="nav nav-pills menu-text">
            <li className="nav-item dropdown">
            <Link className="nav-link text-white" to="/">
                Inicio
              </Link>
              <span
                className="nav-link text-white dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={onInicioClick}
                  >
                    Página principal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registrar-usuario">
                    Registrar Usuario
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/buscar-generos">
                    Buscar Géneros Literarios
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/recomendaciones">
                Libros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/libros">
                Ver Libros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/prestamos">
                Mis préstamos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Iniciar sesión
              </Link>
              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
