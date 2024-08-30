import React, { useState } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';

const Loja = () => {
    
    const [estado, setEstado] = useState({carregando: true, dados: []});  //É possivel utilizar um objeto para simplificar o codigo.

    if (estado.carregando){
        setTimeout(() =>{  
            setEstado({carregando: false, dados:objetos});    //Retorna a mensagem carregando, após 2 segundos muda o estado de carregando para false e renderiza o vetor de dados
        }, 2000);

        return (<div>Carregando...</div>);
    }
    
    /*const [dados, setDados] = useState(null); //dados recebe valor null e setDados vai ser uma função utilizada para alterar os dados.
    const [carregando, setCarregando] = useState(true);*/

    /*if (dados === null){
        setTimeout(() =>{  //Apos 2 segundos, executa a função setDados fazendo dados receber os valores do vetor de objetos
            setDados(objetos)
        },2000)
        return (<div>Carregando...</div>); //Retorna a mensagem carregando enquanto execulta a função setTimeout
    }*/

        /*if (carregando){
            setTimeout(() =>{  
                setDados(objetos);    //Apos 2 segundos, executa setDados fazendo dados receber os valores do vetor de objetos
                setCarregando(false);   //Apos 2 segundos, executa setCarregando e ele recebe o valor de false
            }, 2000);

            return (<div>Carregando...</div>);
        }*/
    return (<>
        <Cabecalho />
        <main>
            <div className="loja">
                {
                    estado.dados.map(x => {     //Função map mapea um vetor de objetos e retorna os valores de cada posição do vetor.
                        return <LojaSkin
                            nome={x.nome} 
                            imagem={x.imagem}
                            gemas={x.gemas}
                        />
                    })
                }
            </div>
        </main>
        <Rodape />
    </>);
};

const objetos = [
    { nome: 'Ariana Emberlyn', imagem: 'a.png', gemas: 1111 },
    { nome: 'Arthur Morgan', imagem: 'b.png', gemas: 2222 },
    { nome: 'Dutch', imagem: 'c.png', gemas: 3333 },
    { nome: 'Batman', imagem: 'd.png', gemas: 4444 },
    { nome: 'Alan Wake', imagem: 'e.png', gemas: 5555 },
    { nome: 'Homelander', imagem: 'f.png', gemas: 6666 },
    { nome: 'Jhon Marston', imagem: 'g.png', gemas: 7777 },
    { nome: 'Jimmie Buttler', imagem: 'h.png', gemas: 8888 },
    { nome: 'Anderson Talisca', imagem: 'i.png', gemas: 9999 },
];

export default Loja;

/* <div className="loja">
            <LojaSkin
                    nome="Ariana Emberlym"  //Cria e passa valores a parametros que podem ser utilizados em outros componentes
                    imagem="a.png"
                    gemas="2000" />
        </div>

        <div className="loja">
                <LojaSkin
                    nome="Arthur Morgan"
                    imagem="b.png"
                    gemas="9999" />
    </div>*/
