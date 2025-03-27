import styled from "styled-components";
import { teclas } from "./teclas";
import { useState } from "react";

const TecladoContainer = styled.section`
   height: auto; /* Ajustável conforme o conteúdo */
    padding: 0px;
    width: 380px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center; /* Alinha os itens */
`;

const Tecla = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 26px;
    width: 70px; /* Largura ajustável */
    height: 70px; /* Altura ajustável */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, 0.4)
    }
`;

const TeclaResultado = styled.button`
    background: linear-gradient(to right, #5D3FD3, #4169E1);
    border: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    width: 80px;
    height: 70px;
    display: flex;
    position: relative;
    left: 7px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
        color: rgba(255, 255, 255, 0.4)
    }
    `;


function Teclado( {setParagrafoValor, animarResultado,setAnimarResultado} ) {
    let [inputValor, setInputValor] = useState("");

    function mudarValorInput(novoValor) {
        setInputValor(novoValor);
        document.getElementById("inputResultado").value = novoValor;
    }

    function mudaValorParagrafo(resultado) {
        setParagrafoValor(resultado)
    }

    function deletar() {
        setAnimarResultado(false);
        mudarValorInput(inputValor = "");
        mudaValorParagrafo(`0`)
    }

    function porcentagem() {
        if (animarResultado !=true) { 
            if (isNaN(inputValor / 100)) {
                setAnimarResultado(true)
                setParagrafoValor("Pode não man..")
            } else {
                mudarValorInput(inputValor / 100 +  "*")
                
            }
        }
    }

    function inverter() {
        if (inputValor != "" || inputValor != 0) {
            if (animarResultado !=true) {
                if (isNaN(inputValor *= -1)) {
                    mudaValorParagrafo("somente numero")
                    setAnimarResultado(true)
                } else {
                    mudarValorInput(inputValor)
                }
                
            }
        }
        
    }

    function apagar() {
        if (animarResultado != true) {
            mudarValorInput(inputValor.slice(0, -1))
        }
    }

    function escrever(texto) {
        if (animarResultado !=true) {
            mudarValorInput(inputValor + texto);
        }
    }

    function mostrarResultado() {
        try {
            setParagrafoValor(eval(inputValor).toString());
            setAnimarResultado(true);
        } catch {
            setParagrafoValor("Deu certo não..");
            setAnimarResultado(true);
        }
    }

    function realizaAcao(indiceTecla, teclaValor) {
        switch(indiceTecla) {
            case 0:
                deletar();
            break;

            case 1:
                porcentagem();
            break;

            case 2:
                inverter();
            break;

            case 3:
                escrever("/");
            break;

            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 12:
            case 13:
            case 14:
                escrever(teclaValor.toString());
            break;

            case 7:
                escrever("*");
            break;

            case 11:
                escrever("-");
            break;

            case 15:
                escrever("+");
            break;

            case 16:
                escrever(".");
            break;
            case 17:
                escrever("0");
            break;

            case 18:
                apagar();
            break;

            case 19:
                mostrarResultado();
            break;

        default:
            break;
        }
    }

    return (
        <TecladoContainer>
                {teclas.map((tecla, index) => (
                    <Tecla className="teclas" key={index} onClick={() => realizaAcao(index, tecla.valor)}>
                        {tecla.valor}
                    </Tecla>
                ))}

                <TeclaResultado onClick={() => mostrarResultado()}>=</TeclaResultado>

        </TecladoContainer>
    );
}

export default Teclado;

