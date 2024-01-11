import style from "../style.module.scss";
import React from "react";
import {ITarefa} from "../../../types/tarefa";

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({tarefa, tempo, selecionado, completado, selecionaTarefa, id}: Props) {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={
                () => selecionaTarefa({
                    tarefa, tempo, selecionado, completado, id
                })
            }
        >
            <h3>{tarefa}</h3>
            <p>{tempo}</p>
        </li>
    )
}