import { useRef } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api'

function Cadastro() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(event){
    event.preventDefault()

    try {
      await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      alert("Usuário cadastrado")
      nameRef.current.value = ""
      emailRef.current.value = ""
      passwordRef.current.value = ""
    }catch(err){
      alert("Erro ao cadastrar")
    }
    
  }

  return (
    <div className="max-w-xl mx-auto bg-purple-300 rounded-xl mt-14 p-8 shadow-2xl text-center items-center">
        <h2 className="text-xl font-semibold text-purple-900 mt-3 mb-5">Cadastro</h2>
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Nome" className="w-full bg-transparent border border-purple-900 py-2 px-7 rounded-md focus:outline-none" />
            <input ref={emailRef} type="email" placeholder="Email" className="w-full bg-transparent border border-purple-900 py-2 px-7 rounded-md focus:outline-none"/>
            <input ref={passwordRef} type="password" placeholder="Senha" className="w-full bg-transparent border border-purple-900 py-2 px-7 rounded-md focus:outline-none"/>
            <button className="w-full bg-purple-900 text-fuchsia-200 py-2 px-4 rounded-md hover:bg-purple-950 mt-6">Cadastrar</button>
        </form>
        <Link to="/cadastro_login_react/login" className="text-purple-900 font-medium mt-5 block hover:text-purple-950">Já tem uma conta? Faça login</Link>
    </div>
  );
}

export default Cadastro;
