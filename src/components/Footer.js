///Componente del footer
import React from "react";

export function Footer(){
    return (
        <>
            <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-300">
                <span className="text-sm text-purple-900 sm:text-center dark:text-purple-900">© 2023. Desarrolaldo y mantenido por <a href="https://gk.city/" className="hover:underline">GK City</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-purple-900 hover:opacity-75 sm:mt-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
