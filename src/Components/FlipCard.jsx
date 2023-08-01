import React, { useState } from 'react';
import { useId } from 'react';
var count = 0

function angel (props) {
    count = count + 0.5

    console.log(document.querySelectorAll(".card").length)
    const current = useId()
    var [deg, setDeg] = useState(180)
    const spin = function (event) {
        setDeg(deg + 180)
        var card = document.getElementById(current)

        var front = card.querySelector(".face.front")
        var back = card.querySelector(".face.back")

        front.style.transform = "perspective(600px) rotateY(" + deg + "deg)"
        back.style.transform = "perspective(600px) rotateY(" + (deg - 180) + "deg)"
    }

    return (
        <div className="card" id={current} onClick={spin}>
            <div className="face front">
                <div className="number borderRa">
                    {props.numero}
                    <img src={"src/Images/GT/" + props.imagen + ".webp"} alt={props.imagen} className="imagen" />
                </div>
                <div className="containerInfo">
                    <h5>
                        <p id='info'>{props.name}</p>
                        <span id='info' >{props.numero}</span>
                    </h5>
                    <div className="centrar">
                        <p style={{ marginRight: '0.5pc' }} id='info'>Tipo</p>
                        <p id='info' className="border" style={{ background: props.color }}>{props.tipo}</p>
                    </div>
                    <div className="centrar">
                        <p>Arma:</p>
                        <p>{props.arma}</p>
                    </div>
                </div>
            </div>
            <div className="face back">
                <img src={"src/Images/GT/" + props.imagenp + ".webp"} alt={props.imagen}  />
                <p>"{props.description}"</p>
            </div>
        </div>
    )
}

export default angel;