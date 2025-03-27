import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import gsap from "gsap";

const TopoContainer = styled.section`
    background: linear-gradient(to right, #007BFF, #5D3FD3);
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: auto;

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
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(217, 217, 217, 0.4);
        color: white;
        font-size: 48px;
        height: 67px;
        padding-left: 8px;
        letter-spacing: 12px;
        width: 235px;
        transition: all 0.3s ease;
    }

    .resultado__paragrafo {
        font-size: 20px;
        transition: all 0.3s ease;
        opacity: 0.7;
        margin-right: 8px; 
        font-weight: 300;
    }
`;

function Topo({ paragrafoValor, animarResultado }) {
    const inputRef = useRef(null);
    const paragrafoRef = useRef(null);

    useEffect(() => {
        if (animarResultado) {
            gsap.to(inputRef.current, { scale: 0.7, opacity: 0.5, duration: 0.2 });
            gsap.to(paragrafoRef.current, { scale: 1.3, opacity: 1, duration: 0.2 });
        } else {
            gsap.to(inputRef.current, { scale: 1, opacity: 1, duration: 0.7 });
            gsap.to(paragrafoRef.current, { scale: 1, opacity: 0.7, duration: 0.7 });
        }
    }, [animarResultado]);

    return (
        <TopoContainer>
            <div className="div__titulo">
                <h2 className="calculadora__titulo">calculadoras Stark</h2>
            </div>
            <div className="div__resultado">
                <input ref={inputRef} className="input__resultado" id="inputResultado" disabled/>
                <p ref={paragrafoRef} className="resultado__paragrafo" id="resultadoParagrafo">{paragrafoValor}</p>
            </div>
        </TopoContainer>
    );
}

export default Topo;