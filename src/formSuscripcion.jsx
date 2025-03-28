
export default function FormSuscripcion() {
    return (
            <div className='contenedorPrincipal'>
                <h1>Creá una cuenta</h1>
                <h2>Ingresá tu información para registrarte</h2>
                <form action="" method="post" onClick={(e) => e.preventDefault()}>
                <div className='contenedorLineal'>
                    <div className='cajaLineal'>
                    <label htmlFor="name">Nombres</label>
                    <input type="text" placeholder="John" id="name" />
                    </div>
                    <div className='cajaLineal'>
                    <label htmlFor='apellido'>Apellidos</label>
                    <input type="text" placeholder="Doe" id="apellido" />
                    </div>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="tu@email.com" id="email" />
                <label htmlFor="email">Teléfono</label>
                <input type="tel" placeholder="+54 11 1111-1111" id="tel" />
                <label htmlFor="pass">Contraseña</label> 
                <input type="password" placeholder="Contraseña" id="pass" />
                <label htmlFor="passConf">Confirmar Contraseña</label>
                <input type="password" placeholder="Confirmar Contraseña" id="passConf" />
                <button type="submit" className='boton'>Registrarme</button>
                </form>
            </div>
    )
}