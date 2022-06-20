import { bgContainer, Logo, Button, TextField } from "../../base.styles"
import { loginContainer } from "./login.styles"
import { useState } from "react";
import { loginWithEmail, createUser } from "../../../sevices/services"



function Login() {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    const loginUser = (e: React.FormEvent<HTMLFormElement>, mail: string, password: string) => {
        e.preventDefault()
        loginWithEmail(mail, password)
    }

    const registerUser = () => {
        createUser(email, senha)
    }

    return (
        <div className={bgContainer().className}>
            <Logo size="small" />
            <form onSubmit={e => loginUser(e, email, senha)} className={loginContainer().className}>
                <Logo size="large" />
                <TextField placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} type="email" required></TextField>
                <TextField placeholder="Senha" name="email" value={senha} onChange={e => setSenha(e.target.value)} type="password" required></TextField>
                <Button size="large" primary="true" name="login" type="submit">Login</Button>
                <span>ou</span>
                <Button size="large" primary="false" name="register" onClick={() => registerUser()} type="button">Cadastre-se</Button>
            </form>
        </div>
    )
}

export default Login;