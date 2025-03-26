import styled from "styled-components";
import { teclas } from "./teclas";

const TecladoContainer = styled.section`

`

function Teclado() {
    return (
        <TecladoContainer>
            <section className="teclado">
                { teclas.map((tecla, index) => (
                    <button className="teclas"  key={ index } onClick={ () => realizaAcao(index, tecla.valor)}>{ tecla.valor }</button>
                )) }
            </section>
        </TecladoContainer>
    )
}

function deletar() {
    console.log("gay")
}

function porcetagem() {

}

function inverter() {

}

function escrever(texto) {
    console.log(texto)
}

function mostrarResultado() {

}

function realizaAcao(indiceTecla, teclaValor) {
    switch(indiceTecla) {
        case 0:
        deletar();
        break;

    case 1:
        porcetagem();
        break;

    case 2:
        inverter();
        break;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        escrever(teclaValor.toString());
        break;

    case 15:
        escrever(",");
        break;

    case 16:
        escrever("0");
        break;

    case 17:
        escrever("()");
        break;

    case 18:
        mostrarResultado();
        break;

    default:
        break;
        
    }
}

export default Teclado