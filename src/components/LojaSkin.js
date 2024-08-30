import React from 'react';
import Loja from './Loja';

const LojaSkin = (props) => {
    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`/* Recebe o parametro imagem importado de Loja.js*/}/>
            <div className="container">
                <p>{props.nome/* Recebe o parametro nome importado de Loja.js*/}</p> 
                <button className="botao-comprar">{props.gemas/* Recebe o parametro gemas importado de Loja.js*/}<img src="./assets/imgs/diamante.gif" /></button>
            </div>
        </div>
    );
}

export default LojaSkin;
