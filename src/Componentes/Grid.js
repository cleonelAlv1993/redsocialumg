import React from "react";
import { Link } from "react-router-dom";
import ImagenZoom from "../Vistas/ImagenZoom";

export default function Grid( { posts } ){
    const columnas = posts.reduce((columnas, post) => {
        const ultimaColumna = columnas[columnas.length - 1];

        if (ultimaColumna && ultimaColumna.length < 3 ) {
            ultimaColumna.push(post);
        } else {
            columnas.push([post])
        }
        return columnas;
    }, [] )

    return (
        <div>
            {
            columnas.map((columna, index) => {
                return (
                    <div key={index} className="Grid__row">
                        {
                            columna.map(post => (
                                <GridFoto key={post._id} {...post} />
                            ))}
                    </div>
                );
            })
            }
        </div>
    );
}

function GridFoto({ _id, url, caption}){
    return (
        <Link to={`/posts/${_id}`} className="Grid__post">
            <ImagenZoom src={url} alt={caption} />
        </Link>
    );
}