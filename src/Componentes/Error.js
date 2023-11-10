import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export default function Error({ mensaje, esconderError }){
    if (!mensaje) {
        return null;
    }

    return (
        <div className="ErrorContainer" role="alert">
            <div className="Error_inner">
            <span className="block">{mensaje}</span>
            <button className="Error_button" onClick={esconderError}>
                <FontAwesomeIcon className="Error_icon" icon={faCircleXmark} />
            </button>
            </div>
        </div>
    );
}