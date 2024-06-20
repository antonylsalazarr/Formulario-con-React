import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function Form() {
    const [nombre, setNombre] = useState('')
    const [pass, setPass] = useState('')
    const [vPass, setvPass] = useState('')
    const [email, setEmail] = useState('')
    const [fono, setFono] = useState('')
    const [errores, setErrores] = useState({})


    const nombreRegla = /^[A-Za-z][0-9]{4}$/;
    const passRegla = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const correoRegla = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fonoRegla = /^(2|3|4|5|6)\d{6}$|^9\d{8}$/;

    const sendData = (e) => {
        e.preventDefault();

        const erroresActuales = {};

        if (!nombreRegla.test(nombre)) {
            erroresActuales.nombre = 'El nombre es incorrecto'
        }

        if (!passRegla.test(pass)) {
            erroresActuales.pass = 'La contraseña requiere de 8 caracteres'
        }
        if (pass !== vPass) {
            erroresActuales.vPass = 'Las contraseñas no coinciden'
        }

        if (!correoRegla.test(email)) {
            erroresActuales.email = 'La dirección email no es válida'
        }
        if (!fonoRegla.test(fono)) {
            erroresActuales.fono = 'El número de teléfono no es válido'
        }


        if (Object.keys(erroresActuales).length === 0) {
            console.log('Formulario Enviado')
            setNombre('')
            setPass('')
            setvPass('')
            setEmail('')
            setFono('')
            setErrores({})

        } else {
            console.log('Error')
            setErrores(erroresActuales)
        }

    }
    return (
        <>
            <h1>Crear cuenta</h1>
            <form onSubmit={sendData}>
                <div className="campo">
                    <label htmlFor="nombre">Nombre:</label>
                    <br></br>
                    <input
                        type='text'
                        id='nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder='Ej: a1234'
                    />
                    <span className='msjError'>{errores.nombre}</span>
                </div>
                <div className="campo">
                    <label htmlFor="pass">Contraseña:</label>
                    <br></br>
                    <input
                        type='password'
                        id='pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Ej: Abcd1234'
                    />
                    <span className='msjError'>{errores.pass}</span>
                </div>
                <div className="campo">
                    <label htmlFor="vPass">Verificar contraseña:</label>
                    <br></br>
                    <input
                        type='password'
                        id='vPass'
                        value={vPass}
                        onChange={(e) => setvPass(e.target.value)}
                        placeholder='Ej: Abcd1234'
                    />
                    <span className='msjError'>{errores.vPass}</span>
                </div>
                <div className="campo">
                    <label htmlFor="correo">Correo:</label>
                    <br></br>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ej: persona@email.com'
                    />
                    <span className='msjError'>{errores.email}</span>
                </div>
                <div className="campo">
                    <label htmlFor="fono">Teléfono:</label>
                    <br></br>
                    <input
                        type='integer'
                        id='fono'
                        value={fono}
                        onChange={(e) => setFono(e.target.value)}
                        placeholder='Ej: 999555111'
                    />
                    <span className='msjError'>{errores.fono}</span>
                </div>

                <button type='submit' className="boton">Enviar</button>
            </form>
        </>
    )
}

export default Form
