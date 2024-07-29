import { useState } from "react";
import InputForm from "../formActivity/InputForm";
import SubmitButton from "../formActivity/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../layout/BackButton";
import styles from './Login.module.css'

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
        e.preventDefault();
        fetch('http://localhost:4000/users')
        .then(resp => resp.json())
        .then(data => {
            const user = data.find(user => user.email === emailUser);

            if (user) {
                if (user.password === passwordUser) {
                    alert("Login bem-sucedido!");
                    navigate("/Ua")
                } else {
                    setError("Senha incorreta. Por favor, tente novamente.");
                }
            } else {
                setError("Usuário não encontrado. Por favor, verifique seu email.");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.container}>
            <BackButton/>
            <form className={styles.card} onSubmit={logarConta}>
                <h1>Login</h1>
                <div className={styles.inputs}>
                    <InputForm name="Email" placeholder="E-mail" type="email" required={true} handleOnChange={handleEmailChange} />
                    <InputForm name="Password" placeholder="Senha" type="password" required={true} handleOnChange={handlePasswordChange} />
                    <SubmitButton text="Login" />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Você não tem login? <Link className={styles.link} to="/register">Cadastrar</Link></p>
            </form>
        </div>
    );
}

export default Login;
