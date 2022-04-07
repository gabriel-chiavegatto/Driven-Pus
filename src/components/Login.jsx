import logoJogo from "../assents/imgs/logo-driven+.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Container>
            <section className="flex">
                <div>
                    <section>
                        <img src={logoJogo} alt="logo" />
                    </section>
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="senha" />
                    <Link to="/subscriptions/">
                        <button>ENTRAR</button>
                    </Link>
                    <Link to="/sing-up/">
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>

                </div>
            </section>

        </Container>
    )
}

const Container = styled.main`

    background: #0E0E13;
    height: 100vh;

    section{
        display: flex;
        justify-content: center;
    }
    img{
        width: 180px;
        padding: 68px 0 32px 0;
    }
    input{
        width: 299px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 16px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    button{
        width: 298px;
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
    button:hover{
        cursor: pointer;
    }

`;