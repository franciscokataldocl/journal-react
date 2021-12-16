import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    //usedispatch dde react-redux nos permite disparar acciones
    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui)

    //USO DEL HOOK USEFORM() ----------------------------
    //ddestructuramos lo que viene del hook como arreglo
    //el estado inicial del useForm es un objeto
    /*Acá podemos definir los parametros que necesitemos para cada caso
    el hook de todas maneras lo procesara */
const [formValues, handleInputChange] = useForm({
    email: 'test@gmail.com',
    password: '123456'
});

//DESTRUCTURAMOS DESDE EL USEFORM()---------------------
const {email, password} = formValues;
/*
ahora el valor email y password debemos pasarselo a los inputs
input email: value={email} --- input password: value={password}
ademas debemos pasarle a ambos inputs el onChange={handleInputChange}

asegurarnos que el name de cada input corresponda
input email: name="email" --- input password: name="password"
*/

/*la funcion handleLogin se la pasamos al onsubmit del 
formulario para obtener la data al hacer submit */
const handleLogin = (e)=>{
    e.preventDefault();
    //console.log(email, password)
    //importamos el action login desde ./../actions/auth
    /*
    al dispatch le pasamos el login() y al login, le pasamos los dos valores que definimos
    en auth.js -> login():

    payload:{
            uid, //1234
            displayName // 'Valentin'
        }

    */
    dispatch(startLoginEmailPassword(email, password));

}

const handleGoogleLogin = ()=>{
    dispatch(startGoogleLogin());
}


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input 
                    type="text"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="auth__input"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                {
                    loading 
                    ? <div className='loading_container'>
                        <img 
                        alt="asdsad" 
                        className='loading_button' 
                        src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"/>
                      </div>
                    : <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}>Login </button>
                } 
              
                

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div onClick={handleGoogleLogin} className="google-btn">
                        <div  className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
