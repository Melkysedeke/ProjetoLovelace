import { useState } from "react";
import InputForm from "../formActivity/InputForm";
import SubmitButton from "../formActivity/SubmitButton";
import LinkButton from "../layout/LinkButton";
import { useNavigate } from "react-router-dom";
import BackButton from "../layout/BackButton";

function Login() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    function handleEmailChange(e) {
        setEmailUser(e.target.value);
    }

    function handlePasswordChange(e) {
        setPasswordUser(e.target.value);
    }

    function logarConta(e) {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Requisição GET para buscar todos os usuários
        fetch('http://localhost:4000/users')
        .then(resp => resp.json())
        .then(data => {
            // Encontrar usuário com email correspondente
            const user = data.find(user => user.email === emailUser);

            if (user) {
                // Verificar se a senha está correta
                if (user.password === passwordUser) {
                    // Login bem-sucedido
                    alert("Login bem-sucedido!");
                    navigate("/Ua")
                    // Aqui você pode redirecionar o usuário para a próxima página
                } else {
                    // Senha incorreta
                    setError("Senha incorreta. Por favor, tente novamente.");
                }
            } else {
                // Usuário não encontrado
                setError("Usuário não encontrado. Por favor, verifique seu email.");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <BackButton/>
            <form onSubmit={logarConta}>
                <InputForm name="Email" placeholder="E-mail" type="email" required={true} handleOnChange={handleEmailChange} />
                <InputForm name="Password" placeholder="Senha" type="password" required={true} handleOnChange={handlePasswordChange} />
                <SubmitButton text="Login" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Você não tem login? <LinkButton text="Cadastrar" to="/register"/></p>
            </form>
        </div>
    );
}

export default Login;
