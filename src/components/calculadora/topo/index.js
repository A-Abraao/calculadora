import styled from "styled-components";

const TopoContainer = styled.section`
    background: #4F46E5;
    height: 130px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 380px;;

    .div__titulo {
        text-align: center;
    }
    .div__resultado {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        gap:10px;
        height: 100%;
        justify-content: flex-end;
        width: 100%;
    }
    
    .input__resultado {
        background: #4F46E5;
        border: none;
        border-bottom: 1px  solid  rgba(217, 217, 217, 0.4);
        color: white;
        font-size: 48px;
        height: 67px;
        padding-left: 8px;
        width: 235px;
    }

    .resultado__paragrafo {
        color: rgba(255, 255, 255, 0.7);
        font-size: 25px;
    }

    
`

function Topo({ paragrafoValor }) {
    return (
        <TopoContainer>
            <div className="div__titulo">
                <h2 className="calculadora__titulo">calculadoras Stark</h2>
            </div>
            <div className="div__resultado">
                <input className="input__resultado"  id="inputResultado"  disabled/>
                <p className="resultado__paragrafo" id="resultadoParagrafo">{ paragrafoValor }</p>
            </div>
        </TopoContainer>
    )
}

export default Topo