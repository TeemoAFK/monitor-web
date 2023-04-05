///Página de atterizaje tras el login
import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-xl m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">Bienvenidx {user.displayName || user.email}</h1>
        <div className="whitespace-normal">
          <a href="/admin-datos" className="mb-8">
            <button
              className="bg-violet-500 hover:violet-700 text-white font-bold shadow rounded border-2 border-violet-500 py-2 px-4 w-full">
              Ver el directorio
            </button>
          </a>
        </div>
        <br/>
        <div className="whitespace-normal">
        <button
            className="bg-violet-500 hover:violet-700 text-white font-bold shadow rounded border-2 border-violet-500 py-2 px-4 w-full"
            onClick={handleLogout}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
}