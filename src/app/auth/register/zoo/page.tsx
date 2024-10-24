import Link from "next/link";

export default function RegiterZoo() {
  return (
    <div className="w-full md:w-full lg:w-full mx-auto md:mx-0 min-w-400px lg:px-20">
        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
            Registra tu zoologico
          </h2>
          <form action="" className="w-full">
            <div id="input" className="flex flex-col w-full my-5">
              <label className="text-gray-500 mb-2">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Please insert your username"
                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              />
            </div>
            <div id="input" className="flex flex-col w-full my-5">
              <label className="text-gray-500 mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Please insert your password"
                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              />
            </div>
            <div id="button" className="flex flex-col w-full my-5">
            <button
                type="button"
                className="w-full py-4 bg-green-600 rounded-lg text-green-100 font-bold"
              >
                Sigin
              </button>
              <div className="flex justify-evenly mt-5">
              <Link
                href="/auth/register/user"
                className="w-full text-center text-green-600 font-medium underline"
              >
                Registrarse
              </Link>
              <Link
                href="/auth"
                className="w-full text-center text-green-600 font-medium underline"
              >
                Iniciar sesión
              </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}
