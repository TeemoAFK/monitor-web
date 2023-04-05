////Componente que despliega la información del home cuando el usuario no esta logueado. 
import React from "react";
import image from "../assets/images/monitor.png";


export function Landing() {
    return (
        <>
            <div className="bg-white dark:bg-gray-800">
                <div className="grid px-20 py-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-2o0">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl text-slate-900 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Bienvenido a <br />Web Monitor</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
                        Este sitio le permite monitorear el estado de su sitio web de manera fácil y eficiente. Nuestro sistema de monitoreo revisará periódicamente su sitio web para asegurarse de que esté en línea y funcionando correctamente.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a href="/directorio" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>&nbsp;&nbsp;&nbsp;Iniciar Sesión
                            </a>
                        </div>
                    </div>
                    <div className="hidden mr-4 lg:mt-0 lg:col-span-5 lg:flex lg:mb-20">
                        <img className=""src={image} alt="voces-expertas-ilustracion" />
                    </div>
                </div>
                
            </div>
        </>

    );
}
