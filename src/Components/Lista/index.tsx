import React from "react";
import style from "./style.module.scss"
import Item from "./Item/index"

function Lista(){
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    },{
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },{
        tarefa: "TypeScript",
        tempo: "03:00:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item {...item} key={index}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;