import React from 'react'
// import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
        return (
            <nav>
                <ul className='flex w-full justify-between my-3'>
                    <li>Logo</li>
                    <li>Usuarios</li>
                    <li>Ventas</li>
                    <li>Productos</li>
                    <li className='px-3'>
                        {/* <Link to='/login'> */}
                            <button 
                                onClick={() => loginWithRedirect()}
                                className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
                                Iniciar Sesión
                            </button>
                        {/* </Link> */}
                    </li>
                </ul>
            </nav>
        )
}

export default Navbar;
