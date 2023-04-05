///Componente que renderiza el navbar 
import React from "react";
import image from "../assets/images/grafico-de-computadora.png";

export function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-5 py-0 bg-slate-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-medium leading-relaxed inline-block mr-4 py-0 whitespace-nowrap  text-violet-900"
              href="/"
            >
              <img src={image} alt="voces-expertas-logo" width="100px" className="my-1"/>
            </a>
            <button
              className="text-violet-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="inline-block w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-sm  font-medium leading-snug text-purple-900 hover:opacity-75"
                  href="https://redirectdetective.com/"
                >
                  <span className="ml-2">Redirect Detective</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-sm  font-medium leading-snug text-purple-900 hover:opacity-75"
                  href="https://pagespeed.web.dev/"
                >
                  <span className="ml-2">Page Speed Insights</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-sm  font-medium leading-snug text-purple-900 hover:opacity-75"
                  href="https://chat.openai.com/auth/login"
                >
                  <span className="ml-2">Chat GPT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-sm  font-medium leading-snug text-purple-900 hover:opacity-75"
                  href="/login"
                >
                  <span className="ml-2">Iniciar Sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}