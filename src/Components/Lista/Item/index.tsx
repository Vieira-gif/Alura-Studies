import style from "../style.module.scss";
import React from "react";
import {ITarefa} from "../../../types/tarefa";

export default function Item({tarefa, tempo, selecionado, completado}: ITarefa) {
    console.log("Item atual: ", {tarefa, tempo, selecionado, completado})
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <p>{tempo}</p>
        </li>
    )
}