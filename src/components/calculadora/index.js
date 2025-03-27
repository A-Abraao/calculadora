import styled from "styled-components";
import { useState } from "react";
import Topo from "./topo";
import Teclado from "./teclado";

const CalculadoraContainer = styled.section`
    background: linear-gradient(rgba(64, 64, 64, 0.8), rgba(23, 23, 23, 0.8));
    height: 610px;
    width: 400px;
`
function Calculadora () {
    const [paragrafoValor, setParagrafoValor] = useState("= 0");

    return (
        <CalculadoraContainer>
            <Topo paragrafoValor={paragrafoValor} />
            <Teclado setParagrafoValor={setParagrafoValor} />
        </CalculadoraContainer>
    )
}

export default Calculadora