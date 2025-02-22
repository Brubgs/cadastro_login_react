import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api'

function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
  
    async function handleSubmit(event){
      event.preventDefault()
  
      try {
        const {data:token} = await api.post('/login', {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })

        localStorage.setItem('token', token)

        alert("Login realizado")
        emailRef.current.value = ""
        passwordRef.current.value = ""
        
      }
      
      catch(err){
        alert("Email ou senha incorretos")
      }
      
    }
    return(
        <div className="max-w-xl mx-auto bg-purple-300 rounded-xl mt-14 p-8 shadow-2xl text-center items-center">
            <h2 className="text-xl font-semibold text-purple-900 mt-3 mb-5">Login</h2>
            <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full bg-transparent border border-purple-900 py-2 px-7 rounded-md focus:outline-none" autoComplete="username"/>
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full bg-transparent border border-purple-900 py-2 px-7 rounded-md focus:outline-none" autoComplete="current-password"/>
                <button className="w-full bg-purple-900 text-fuchsia-200 py-2 px-4 rounded-md hover:bg-purple-950 mt-6">Entrar</button>
            </form>
            <Link to="/" className="text-purple-900 font-medium mt-5 block hover:text-purple-950">Não tem uma conta? Faça o cadastro aqui</Link>
        </div>
        
    )
}

export default Login