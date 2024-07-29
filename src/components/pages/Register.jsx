import { useState } from "react";
import InputForm from "../formActivity/InputForm";
import SubmitButton from "../formActivity/SubmitButton";
import LinkButton from "../layout/LinkButton";
import { useNavigate, Link } from "react-router-dom";
import BackButton from "../layout/BackButton";
import styles from './Register.module.css'

function Register() {
    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleNameChange(e) {
        setNameUser(e.target.value);
    }

    function handleEmailChange(e) {
        setEmailUser(e.target.value);
    }

    function handlePasswordChange(e) {
        setPasswordUser(e.target.value);
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    function cadastrarConta(e) {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Verificar se as senhas coincidem
        if (passwordUser !== confirmPassword) {
            setError("As senhas não coincidem. Por favor, verifique.");
            return;
        }

        // Verificar se o email já está cadastrado
        fetch(`http://localhost:4000/users?email=${emailUser}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0) {
                    setError("Este email já está sendo utilizado. Por favor, escolha outro.");
                } else {
                    // Se o email não está cadastrado, realizar o cadastro
                    fetch('http://localhost:4000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name: nameUser, email: emailUser, password: passwordUser })
                    })
                    .then(resp => resp.json())
                    .then(data => {
                        // Exemplo simples: apenas exibir uma mensagem de sucesso
                        alert("Cadastro realizado com sucesso!");
                        console.log(data)
                        setTimeout(() => {
                            navigate("/Ua");
                        }, 300);
                    })
                    .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.container}>
            <BackButton/>
            <form className={styles.card} onSubmit={cadastrarConta}>
                <h1>Cadastro de Usuário</h1>
                <div className={styles.inputs}>
                    <InputForm name="Name" placeholder="Nome" type="text" required={true} handleOnChange={handleNameChange} />
                    <InputForm name="Email" placeholder="E-mail" type="email" required={true} handleOnChange={handleEmailChange} />
                    <InputForm name="Password" placeholder="Senha" type="password" required={true} handleOnChange={handlePasswordChange} />
                    <InputForm name="ConfirmPassword" placeholder="Confirmar Senha" type="password" required={true} handleOnChange={handleConfirmPasswordChange} />
                    <SubmitButton text="Cadastrar" />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Já tem uma conta? <Link className={styles.link} to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;
