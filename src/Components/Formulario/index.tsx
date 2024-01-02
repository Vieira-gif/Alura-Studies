import React from "react";
import Botao from "../Botao";
import style from "./style.module.scss"

class Formulario extends React.Component{
    render() {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor={"tarefa"}>
                        Adicione um novo estudo
                    </label>
                    <input type={"text"} id={"tarefa"} name={"tarefa"} placeholder={"O que você quer estudar"} required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor={"tarefa"}>
                        Tempo
                    </label>
                    <input type={"time"} step={1} min={"00:00:00"} max={"01:30:00"} id={"tempo"} name={"tempo"} required/>
                </div>
                <Botao texto={"Inserir"}/>
            </form>
        );
    };
}

export default Formulario;