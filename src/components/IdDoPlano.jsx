import styled from "styled-components";
import Voltar from "../assents/imgs/voltar.png";
import Logo from "../assents/imgs/D_white.png";
import Plus from "../assents/imgs/plus.png";
import Money from "../assents/imgs/money.png";
import Lista from "../assents/imgs/lista.png";



export default function IdDoPlano() {
    return (
        <Tela>
            <div>
                <img className="voltar" src={Voltar} alt="voltar" />
                <header>
                    <div>
                        <div>
                            <img src={Logo} alt="logo" />
                            <img src={Plus} alt="plus" />
                        </div>
                        <h1>Driven Plus</h1>
                    </div>
                </header>
                <section className="beneficios-preco">
                    <div className="flex">
                        <img src={Lista} alt="list" />
                        <h2>Benefícios:</h2>
                    </div>
                    <p>Brindes exclusivos</p>
                    <p>Materiais bônus de web</p>
                    <div className="flex">
                        <img src={Money} alt="$" />
                        <h2>Preço:</h2>
                    </div>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </section>
                <footer>
                    <input type="text" placeholder="Nome impresso no cartão" />
                    <input type="text" placeholder="Digitos do cartão" />
                    <div className="flex-input">
                        <input type="text" placeholder="Código de segurança" />
                        <input type="text" placeholder="Validade" />
                    </div>
                    <button>Assinar</button>
                </footer>
            </div>
        </Tela>
    )
}

const Tela = styled.main`

color: #FFFFFF;
display: flex;
justify-content: center;
height: 100vh;

.voltar{
    width: 28px;
    position: absolute;
    top: 25px;
    left: 22px;
}
header{
    height: 254px;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    padding-top: 12px;
}
.flex{
    display: flex;
    align-items: center;
}
section{
    position: absolute;
    top: 255px;
    left: 38px;
}
h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding-bottom: 7px;
}
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
}
input{
    display: block;
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;
    border: none;
    margin-bottom: 8px;
}
.flex-input{
    display:flex;
    justify-content: space-between;
}
.flex-input input{
    width: 145px;
}
button{
    width: 100%;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
}
footer{
    position: absolute;
    left: 38px;
    bottom: 34px;
}
`;