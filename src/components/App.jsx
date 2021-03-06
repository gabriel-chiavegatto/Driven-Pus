import Login from "./Login"
import Cadastro from "./Cadastro";
import Planos from "./Planos";
import IdDoPlano from "./IdDoPlano";
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up/" element={<Cadastro />} />
                <Route path="/subscriptions/" element={<Planos />} />
                <Route path="/id/" element={<IdDoPlano />} />
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}