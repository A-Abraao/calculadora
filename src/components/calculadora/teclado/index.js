import styled from "styled-components";
import { teclas } from "./teclas";
import { useState } from "react";

const TecladoContainer = styled.section`
    height: 480px;
    padding: 10px;
    width: 380px;
    display: grid;
    margin-top:12px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
`;

const Tecla = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 26px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: #4169E1;
        font-size: 32px;
    }
`;

function Teclado( {setParagrafoValor} ) {
    let [inputValor, setInputValor] = useState("");

    function mudarValorInput(novoValor) {
        setInputValor(novoValor);
        document.getElementById("inputResultado").value = novoValor;
    }

    function mudaValorParagrafo(resultado) {
        setParagrafoValor(resultado)
    }

    function deletar() {
        mudarValorInput(inputValor = "");
        mudaValorParagrafo(`= 0`)
    }

    function porcentagem() {
        mudarValorInput(inputValor / 100 +  "*")
    }

    function inverter() {
        if (isNaN(inputValor *= -1)) {
            mudaValorParagrafo("Bagulho só inverte numeros :(")
        } else {
            mudaValorParagrafo(inputValor)
        }
    
    }

    function apagar() {
        mudarValorInput(inputValor.slice(0, -1))
    }

    function escrever(texto) {
        mudarValorInput(inputValor + texto);
    }

    function mostrarResultado() {
        try {
            mudaValorParagrafo(eval(inputValor).toString());
        } catch {
            mudaValorParagrafo("Deu certo não..");
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
        </TecladoContainer>
    );
}

export default Teclado;

