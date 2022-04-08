import styled from "styled-components";
import DWhite from "../assents/imgs/D_white.png";
import Plus from "../assents/imgs/plus.png";
import Fulano from "../assents/imgs/fulano.png";

export default function Home() {
    return (
        <Tela>
            <div>
                <header>
                    <img className="logo" src={DWhite} alt="Deiven" />
                    <img className="plus" src={Plus} alt="plus" />
                    <img className="foto-perfil" src={Fulano} alt="perfil" />
                    <h1>Olá, Fulano</h1>
                </header>
                <section>
                    <button>Solicitar brindes</button>
                    <button>Materiais bônus de web</button>
                    <button>Aulas bonus de tech</button>
                </section>
                <footer>
                    <button className="mudar-plano">Mudar plano</button>
                    <button className="cancelar-plano">Cancelar plano</button>
                </footer>
            </div>
        </Tela>
    )
}
const Tela = styled.main`

    color: #FFFFFF;
    height: 100vh;
    display:flex;
    justify-content: center;

    header{
        position: relative;
        top: 0;
        left: 0;
        height: 176px;
        width: 100%
    }
    .logo{
        position: absolute;
        top: 32px;
        left: 0px;
        width: 50px;
    }
    .plus{
        position: absolute;
        top: 57.67px;
        left: 49.2px;
        width: 25.3px;
    }
    .foto-perfil{
        position: absolute;
        top: 23px;
        right: 0;
        width: 34px;
    }
    h1{
        padding-top: 95px;
        text-align: center;
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        background: #FF4791;
        display: block;
        margin-bottom: 8px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
    .mudar-plano{
        position: absolute;
        bottom: 72px;
    }
    .cancelar-plano{
        position: absolute;
        bottom: 12px;
        background: #FF4747;
    }
`;