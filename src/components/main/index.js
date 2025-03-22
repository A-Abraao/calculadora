import styled from "styled-components";
import Topo from "./topo";
import Teclado from "./teclado";

const CalculadoraContainer = styled.section`

`

function Calculadora() {
    return (
        <CalculadoraContainer>
            <section className="main">
                <Topo />
                <Teclado />
            </section>
        </CalculadoraContainer>
    )
}

export default Calculadora