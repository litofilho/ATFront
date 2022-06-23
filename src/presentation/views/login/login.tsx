import { bgContainer, Logo, Button, TextField } from "../../base.styles"
import { loginContainer } from "./login.styles"
import { useContext, useEffect, useState } from "react";
import { loginWithEmail, createUser } from "../../../sevices/services"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../domain/context/userContext";
import { User } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    let navigate = useNavigate();

    const { setState } = useContext(UserContext);

    useEffect(() => {
        const cookie = sessionStorage.getItem("user_logged")
        if (cookie) {
            const user: User = JSON.parse(cookie)
            setUserLogged(user)
        }
    }, [])

    const setUserLogged = (user: User) => {
        setState(user)
        navigate("home")
    }

    const loginUser = (e: React.FormEvent<HTMLFormElement>, mail: string, password: string) => {
        e.preventDefault()
        loginWithEmail(mail, password).then((response) => {
            if (response) {
                setUserLogged(response)
            }
            else
                alert("Email e senha não conferem, favor verificar e tentar novamente")
        })
    }

    const registerUser = () => {
        createUser(email, senha).then((response) => {
            if (response) {
                setUserLogged(response)
            }
            else
                alert("Infelizmente não conseguimos criar sua conta. Tente novamente mais tarde")
        })
    }

    return (
        <div className={bgContainer().className}>
            <form onSubmit={e => loginUser(e, email, senha)} className={loginContainer().className} role="form">
                <Logo aria-label="Eventaum. logo grande" size="large" />
                <TextField tabIndex={0} title="Email" aria-label="input email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} type="email" required></TextField>
                <TextField title="Senha" placeholder="Senha" aria-label="input password" name="email" value={senha} onChange={e => setSenha(e.target.value)} type="password" required></TextField>
                <Button size="large" primary="true" name="login" type="submit" aria-label="button submit">Login</Button>
                <span>ou</span>
                <Button size="large" primary="false" name="register" onClick={() => registerUser()} type="button" aria-label="create user">Cadastre-se</Button>
            </form>
        </div>
    )
}

export default Login;