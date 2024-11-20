import React from "react";
import { Link } from "react-router-dom";
import  Button  from "react-bootstrap/Button";

const BotonBienvenidos = () => {
    return (
        <div style={{textAlign: 'left', marginTop: '20px', marginLeft: '8px'}}>
            <Link to="/">
            <Button className="custom-button">Bienvenidos</Button>
            </Link>
        </div>
    );
};

export default BotonBienvenidos;