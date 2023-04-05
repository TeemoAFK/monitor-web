///Componente del footer
import React from "react";

export function Footer(){
    return (
        <>
            <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-300">
                <center>
                <span className="text-sm text-purple-900 sm:text-center dark:text-purple-900">© 2023. Desarrolaldo y mantenido por <a href="https://github.com/the97prime/" className="hover:underline">The97Prime</a>. Todos los derechos reservados.
                </span>
                </center>
            </footer>
        </>
    );
};
