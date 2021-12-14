import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    //importar y usar useDispatch() hook
    const dispatch = useDispatch();

    //importamos useSelector()
    //esto para obtener el mensaje de error desde el state (store)
    const {msgError} = useSelector(state => state.ui);
    //console.log(msgError)
    //useForm devuelve un arreglo ver src/hook/useForm.js
    const [formValues, handleInputChange] = useForm({
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
        password2: '123456'
    });

    //destructurar formValues
    const { name, email, password, password2 } = formValues;



    //manejador de registro submit
    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(name, email, password, password2);

        //si la validacion del formulario es correcta haremos el dispatch
        if (isFormValid()) {
            //console.log('formulario correcto');
            dispatch(startRegisterWithEmailPasswordName(email, password,name))
        }

    }

    //npm i validator
    //funcion para validar inputs del formulario
    const isFormValid = () => {
        if (name.trim().length === 0) {
            //dispatch del error a la accion setError src/actions/ui.js
            dispatch(setError('Name is required'))
            //retornamos false, ya que en el submit, arriba if (isFormValid()) solo enviaremos el formulario si es true
            return false;
            //validator plugin
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
            // || significa o, or
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false
        }
        //removemos los errores del store
        dispatch(removeError());
        //si todo esta correcto enviamos true y enviamos el form
        return true;
    }





    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                {   msgError !== null 
                    && 
                    <div className="invalid-feedback">{msgError}</div>
                }
                
                <button type="submit" className="btn btn-primary btn-block mb-5">
                Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
