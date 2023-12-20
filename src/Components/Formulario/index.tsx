import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <label htmlFor={"tarefa"}>
                        Adicione um novo estudo
                    </label>
                    <input type={"text"} id={"tarefa"} name={"tarefa"} placeholder={"O que você quer estudar"} required/>
                </div>
                <div>
                    <label htmlFor={"tarefa"}>
                        Tempo
                    </label>
                    <input type={"time"} step={1} min={"00:00:00"} max={"01:30:00"} id={"tempo"} name={"tempo"} required/>
                </div>
                <Botao></Botao>
            </form>
        );
    };
}

export default Formulario;