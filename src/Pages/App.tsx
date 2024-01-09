import React, {useState} from 'react';
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./style.module.scss"
import Cronometro from "../Components/Cronometro";
import {ITarefa} from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

    return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Cronometro/>
        <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;