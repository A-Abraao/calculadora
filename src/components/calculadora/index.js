import styled from "styled-components";
import Topo from "./topo";
import Teclado from "./teclado";

const CalculadoraContainer = styled.section`

`
function Calculadora () {

    return (
        <CalculadoraContainer>
            <Topo />
            <Teclado/>
        </CalculadoraContainer>
    )
}

export default Calculadora