import Login from "./Login"
import Cadastro from "./Cadastro";
import Planos from "./Planos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up/" element={<Cadastro />} />
                <Route path="/subscriptions/" element={<Planos />} />
            </Routes>
        </BrowserRouter>
    )
}