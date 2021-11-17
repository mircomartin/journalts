import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"
import { authActions } from "../../redux"

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { startLoginEmailPassword, startLoginGoogle } = bindActionCreators(authActions, dispatch)

    const [login, setLogin] = useState<{ email: string; password: string; }>({
        email: 'mirco@gmail.com',
        password: '123456'
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {

        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })

    }

    const handleLogin = (e:FormEvent<HTMLFormElement>):void => {

        e.preventDefault();
        startLoginEmailPassword(login.email, login.password)

    }

    const handleGoogleLogin = ():void => {
        startLoginGoogle()
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin }>

                <input type="text" placeholder="Email" name="email" value={ login.email } className="auth__input" onChange={handleInputChange} />
                <input type="password" placeholder="Password" value={ login.password } name="password" className="auth__input" onChange={handleInputChange} />

                <button type="submit" className="btn btn-primary btn-block">Login</button>

                <div className="auth__social-networks">
                    <p>Login with Google</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">Create new account</Link>

            </form>
        </>
    )
}
