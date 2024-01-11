import Botao from "../Botao";
import Relogio from "./Relogio/Relogio";
import style from "./cronometro.module.scss"
import {ITarefa} from "../../types/tarefa";
import {useState} from "react";
import {tempoParaSegundos} from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado} : Props) {
    const [tempo, setTempo] = useState<Number>();
    if (selecionado?.tempo) setTempo(tempoParaSegundos(selecionado.tempo))
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao texto={"Começar!"}/>
        </div>
    )
}