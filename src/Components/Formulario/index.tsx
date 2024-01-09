import React from "react";
import Botao from "../Botao";
import style from "./style.module.scss"
import {ITarefa} from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}
>{
    state = {
        tarefa: "",
        tempo:"00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas =>
            [...tarefasAntigas, {...this.state, selecionado: false, completado: false, id: uuidv4()}]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor={"tarefa"}>
                        Adicione um novo estudo
                    </label>
                    <input type={"text"} onChange={evento => {
                        this.setState({...this.state, tarefa: evento.target.value})
                    }} value={this.state.tarefa} id={"tarefa"} name={"tarefa"} placeholder={"O que você quer estudar"} required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor={"tarefa"}>
                        Tempo
                    </label>
                    <input type={"time"} step={1} onChange={evento => {
                        this.setState({...this.state, tempo: evento.target.value})
                    }} value={this.state.tempo} min={"00:00:00"} max={"01:30:00"} id={"tempo"} name={"tempo"} required/>
                </div>
                <Botao texto={"Inserir"} type={"submit"}/>
            </form>
        );
    };
}

export default Formulario;