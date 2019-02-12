import React from 'react'

const Movie = (props) => (
    <div>
        <h2>{props.mo.titulo}</h2>
        <p>Duración: {props.mo.duracion}</p>
        <p>Año: {props.mo.año}</p>
        <p>Director: {props.mo.director}</p>
        <p>Productora: {props.mo.productora}</p>
        <img src={props.mo.imagen} alt={props.mo.titulo}></img>
    </div>
)



export default Movie