import styled from "styled-components";

const TopoContainer = styled.div`

`

function Topo() {
    return (
        <TopoContainer>
            <h2 className="calculadora__titulo">calculadoras Stark</h2>
            <input className="input__resultado"  id="inputResultado" />
            <p className="resultado__paragrafo" id="resultadoParagrafo"></p>
        </TopoContainer>
    )
}

export default Topo