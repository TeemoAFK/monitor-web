import React from "react";
///Archivos base para ruteo
import { Route, Routes } from "react-router-dom";
/// Rutas
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";

///Control de inicio y rutas protegidas
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
///Componentes estaticos globales
import { Navbar } from "./components/Navbar";
import {Footer} from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black flex text-white dark:bg-gray-800">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </div>
      <Footer/>
    </>
  );
}

export default App;