import * as React from 'react';
import './App.css';

function App() {
  return (
    <main>
    	<div className="container-principal">
			<div className="container-logo">
				<img className="logo" src="logo_emakers2.png" alt="logo-emakers"/>
				<span>EmakersFood</span>
			</div>
			
			<div className="container-principal-form">
				
				<div className="container-cria-login">
					<h2>Vamos Criar Seu Acesso!</h2>
					<form className="form-cria-login"  method="post" action="">
						<input className="email" id="email_cadastro" name="email_ca" type="email"  placeholder="*Email: contato@gmail.com"></input>
						<input className="senha" id="senha" name="senha" type="password" placeholder="*Senha:"></input>
						<input className="senha"id="confirmar_senha" name="confirmar_senha" type="password" placeholder="*Confirmar senha:"></input>
					</form>
				</div>

				<div className="container-dados-pessoais">
					<h2>Seus Dados Pessoais:</h2>
					<form className="form-dados-pessoais"/>
				</div>
				<input type="image" name="tEnviar" src="_imagens/botao-enviar.png"/>
			</div>
		</div>
    </main>
  );
}

export default App;