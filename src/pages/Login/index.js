import React, { useState } from 'react'
import { Input, Button } from '@material-ui/core'
import './style.scss'
import auth from '../../services/auth.service'

const LoginScreen = props => {

    const [user, setUser] = useState()
    const [password, setPassword]= useState()
    const [loader, setLoader] = useState(false)
    const [incorrectMessage, setIncorrectMessage] = useState(false)

    const handleLogin = e => {
        setLoader(true)
        e.preventDefault()

        auth.login({email: user, password}, 
            () => { props.login(true) }, 
            () => {
                setIncorrectMessage(true)
                setLoader(false)
            }
        )
    }

    return (
        <div className='login-screen'>
            <h4 className='title'>Clickgame</h4>
            <div className='login-box'>
                <h4 className='login-title'>Login</h4>
                <form>
                    <Input
                        className='login-input' 
                        type='string' 
                        placeholder='Usuário'
                        onChange={e => setUser(e.target.value)}
                    />  
                    <Input 
                        className='login-input' 
                        type='password' 
                        placeholder='Senha'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        className='login-button'
                        onClick={handleLogin}
                        disabled={loader}
                    >
                        Entrar
                    </Button>
                    <div>{ loader ? 'Carregando...' : '' }</div>
                    { 
                        incorrectMessage 
                        ? <p className="incorrect-message">
                            Usuário ou senha incorretos.
                        </p> 
                        : ''
                    }
                </form>
            </div>
        </div>
    )
}

export default LoginScreen