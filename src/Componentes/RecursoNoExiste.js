import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";

export default function RecursoNoExiste({mensaje}){
    return (
        <Main center>
            <div>
                <h2 className="RecursoNoExiste__mensaje">{mensaje}</h2>
                <p className="RecursoNoExiste__link-container">
                    <Link to="/">Volver al inicio </Link>
                </p>
            </div>
        </Main>
    );

}