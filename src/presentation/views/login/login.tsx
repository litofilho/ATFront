import { bgContainer, Logo, Button, TextField } from "../../base.styles"
import { loginContainer } from "./login.styles"
import { useState } from "react";
import { loginWithEmail } from "../../../sevices/services"



function Login() {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    const loginUser = (e: React.FormEvent<HTMLFormElement>, mail: string, password: string) => {
        e.preventDefault()
        loginWithEmail(mail, password)
    }

    return (
        <div className={bgContainer().className}>
            <Logo size="small" />
            <form onSubmit={e => loginUser(e, email, senha)} className={loginContainer().className}>
                <Logo size="large" />
                <TextField placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" required></TextField>
                <TextField placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} type="password" required></TextField>
                <Button size="large" type="submit">Login</Button>
            </form>
        </div>
    )
}

export default Login;