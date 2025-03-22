import styled from "styled-components";

const TopoContainer = styled.div`

`

function Topo() {
   return (
        <TopoContainer>
            <div className="main__resultado">
                <h3 className="h3">calculadora Stark</h3>
                <input type="text" className="resultado__input"  id="inputResultado" disabled />
            </div>
        </TopoContainer>
    )
} 

export default Topo