import React from 'react';
import style from "./style.module.scss"


class Botao extends React.Component{

    render() {
        /*const isTrue = true;
        const styles = {
            backgroundRed : isTrue ? "red" : '',
        };*/
        return (
            <button className={style.botao}>Adicionar</button>
        );
    };
}

export default Botao;