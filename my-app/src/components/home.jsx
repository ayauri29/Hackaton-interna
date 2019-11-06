import React from 'react';
import'../css/stylos.css'

export const Home = () =>{
    return(
        <header>Belcorp</header>
        <div>
            <form className="flex">
             <h1>Bienvenida a tu negocio</h1>
             <p> Te faltan 200 puntos!!! </p>
             <input type="text" placeholder= "ingresa tu codigo"/>
             <input type="text" placeholder="ingresa tu contraseña" />
             <button>Ingresar</button>             
            </form>
        </div>
    )
}