import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro_login_react" element={<Cadastro/>}/>
        <Route path="/cadastro_login_react/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
