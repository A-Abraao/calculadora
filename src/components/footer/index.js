import styled from "styled-components";
import imagem from "../image.png"

const FooterContainer = styled.footer`
    justify-content:center;
    height: 500px;
    width: 100%;

    .footer__titulo {
        text-align:center;
    }
    
    .footer__imagem {
        max-height: 79px;
        max-width: 87px;
    }
    `
    
const Framework = styled.div`
    align-items:center;
    justify-content:center;
    display: flex;
    gap: 12px;
    
`

function Footer() {
    return (
        <FooterContainer>
            <Framework>
                <h3 className="footer__titulo">Powered By</h3>
                <img src={ imagem } className="footer__imagem" alt="Powered By React JS" />
            </Framework>
        </FooterContainer>
    )
}

export default Footer