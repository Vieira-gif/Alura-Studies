import style from "../style.module.scss";
import React from "react";

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}){
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <p>{tempo}</p>
        </li>
    )
}