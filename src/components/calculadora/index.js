import styled from "styled-components";
import { useState } from "react";
import Topo from "./topo";
import Teclado from "./teclado";

const CalculadoraContainer = styled.section`
    background: linear-gradient(rgba(64, 64, 64, 0.8), rgba(23, 23, 23, 0.8));
    height: auto;
    margin: 50px auto 50px;
    width: auto;
`
function Calculadora () {
    const [paragrafoValor, setParagrafoValor] = useState("0");
    const [animarResultado, setAnimarResultado] = useState(false);

    return (
        <CalculadoraContainer>
            <Topo paragrafoValor={paragrafoValor} animarResultado={animarResultado}/>
            <Teclado setParagrafoValor={setParagrafoValor} animarResultado={animarResultado} setAnimarResultado={setAnimarResultado}/>
        </CalculadoraContainer>
    )
}

export default Calculadora