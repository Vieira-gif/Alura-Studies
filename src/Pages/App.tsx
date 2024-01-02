import React from 'react';
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./style.module.scss"
import Cronometro from "../Components/Cronometro";

function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario/>
        <Cronometro/>
        <Lista/>
    </div>
  );
}

export default App;