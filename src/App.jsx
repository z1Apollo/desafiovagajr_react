import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs

// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. OK
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. OK
// todo - Desabilite o botão de Login equanto você está executando o login. OK
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login. OK
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição. OK


// Salvee!! Essa foi minha forma de resolver o desafio. O link de onde peguei o desafio está no README.

export default function LoginForm() {
  const [email, SetEmail] = useState("")
  const [senha, SetSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    let values = {
      email: email,
      password: senha
    }

    setErro("")
    setLoading(true)

    try {
      await login(values)
      alert("Logado com sucesso")
    } catch (err) {
      setErro(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {erro && <div className='errorMessage'> {erro} </div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={(event) => SetEmail(event.target.value) } />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={senha} onChange={(event) => SetSenha(event.target.value) } />
        </div>

        <div className='button'>
          <button 
            disabled={loading || !email || email.length < 7 || !senha || senha.length < 7}
            onClick={handleSubmit}
          >
            {loading ? "Entrando..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
