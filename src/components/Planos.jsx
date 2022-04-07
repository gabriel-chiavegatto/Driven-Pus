import DWhite from "../assents/imgs/D_white.png";
import DGreen from "../assents/imgs/D_green.png";
import DYellow from "../assents/imgs/D_yellow.png";
import Plus from "../assents/imgs/plus.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Planos() {
    return (
        <Tela >
            <div>
                <header>
                    Escolha seu plano
                </header>
                <Link to="/id/">
                    <Container>
                        <div className="logo">
                            <img src={DWhite} alt="D Driven" />
                            <img src={Plus} alt="plus" />
                        </div>
                        <div className="preco">
                            PREÇO
                        </div>
                    </Container>
                </Link>
                <Container>
                    <div className="logo">
                        <img src={DGreen} alt="D Driven" />
                        <img src={Plus} alt="plus" />
                    </div>
                    <div className="preco">
                        PREÇO
                    </div>
                </Container>
                <Container>
                    <div className="logo">
                        <img src={DYellow} alt="D Driven" />
                        <img src={Plus} alt="plus" />
                    </div>
                    <div className="preco">
                        PREÇO
                    </div>
                </Container>
            </div>
        </Tela>
    )
}
const Tela = styled.main`

    display: flex;
    justify-content:center;

    header{
        display: flex;
        text-align: center;
        aling-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        padding-top: 29px;
        padding-bottom: 25px; 
    }
`;

const Container = styled.section`
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
    margin-bottom:10px;

    &:hover{
        cursor: pointer
    }

    .logo{
        position:absolute;
        top:42px;
        left:16px;
    }
    .preco{
        position: absolute;
        top:76px;
        right:16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
`;