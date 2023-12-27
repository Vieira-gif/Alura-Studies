import React from 'react';
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./style.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario>

        </Formulario>
        <Lista></Lista>
    </div>
  );
}

export default App;