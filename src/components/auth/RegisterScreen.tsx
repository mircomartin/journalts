import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import validator from 'validator'
import { authActions, State, uiActions } from '../../redux'

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { setErrorAction, removeErrorAction } = bindActionCreators(uiActions, dispatch)
    const { startRegisterNameEmailPassword } = bindActionCreators(authActions, dispatch)

    const { msg } = useSelector((state: State) => state.ui );

    const [register, setRegister] = useState<{ name: string, email: string, password: string, password2: string }>({
        name: 'Mirco',
        email: 'mirco@gmail.com',
        password: '123456',
        password2: '123456',
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {

        setRegister({
            ...register,
            [e.target.name]:e.target.value
        })

    }

    const handleRegister = (e:FormEvent<HTMLFormElement>):void => {

        e.preventDefault();

        if(isFormValid()) {
            startRegisterNameEmailPassword(register.name, register.email, register.password)
        }


    }

    const isFormValid = ():boolean => {

        if(register.name.trim().length <= 2 ) {
            setErrorAction("Name is required")
            return false;
        } else if ( !validator.isEmail(register.email)) {
            setErrorAction("Email is required")
            return false;
        } else if ( register.password !== register.password2 || register.password.trim().length < 5 ) {
            setErrorAction("Verify password, 6 characters min")
            return false;
        }

        removeErrorAction()
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msg !== '' 
                    &&
                    <div className="auth__alert-error">
                        <p>{msg}</p>
                    </div>
                }

                <input type="text" placeholder="Name" name="name" value={register.name} className="auth__input" onChange={handleInputChange}/>
                <input type="text" placeholder="Email" name="email" value={register.email} className="auth__input" onChange={handleInputChange}/>
                <input type="password" placeholder="Password" name="password" value={register.password} className="auth__input" onChange={handleInputChange}/>
                <input type="password" placeholder="Confirm Password" name="password2" value={register.password2} className="auth__input" onChange={handleInputChange}/>

                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

                <Link className="link" to="/auth/login">Login</Link>

            </form>
        </>
    )
}
