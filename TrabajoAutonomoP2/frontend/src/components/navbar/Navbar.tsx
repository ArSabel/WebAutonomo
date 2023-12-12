import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          SistemaIngKalidad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/new-item"
            >
              Nuevo Item
            </Link>
          </div>
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/new-supplier"
            >
              Nuevo Proveedor
            </Link>
          </div>
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/supplier"
            >
              Lista Proveedores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
