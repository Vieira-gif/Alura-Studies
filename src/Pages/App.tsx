import React, {useState} from 'react';
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./style.module.scss"
import Cronometro from "../Components/Cronometro";
import {ITarefa} from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa (tarefaSelecionada: ITarefa){
            setSelecionado(tarefaSelecionada)
            setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => ({
                ...tarefa,
                selecionado: tarefa.id === tarefaSelecionada.id
            })))
    }

    return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Cronometro selecionado={selecionado}/>
        <Lista
            tarefas={tarefas}
            selecionaTarefa={selecionaTarefa}
        />
    </div>
  );
}

export default App;