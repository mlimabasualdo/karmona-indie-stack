import { Link } from "@remix-run/react";


export default function Index() {

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
      <a href="https://karmona.mx/">
                <img
                  src="https://github.com/mlimabasualdo/my-new-repo-for-gh-imagenes/blob/main/LOGOKARMONAAUTOMOTRIZ.jpeg?raw=true"
                  alt="Karmona"
                  className="mx-auto mt-2 w-full max-w-[2rem] md:max-w-[20rem]"
                />
              </a>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://github.com/mlimabasualdo/my-new-repo-for-gh-imagenes/blob/main/FondoTesla.jpg?raw=true"
                alt="Karmona"
              />
              <div className="absolute inset-0 bg-[color:rgba(236,229,229,1)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-yellow-500 drop-shadow-md">
                  Jinetes del Acero
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
              Somos un centro de servicio automotriz profesional con más de 30 años de experiencia en la reparación y mantenimiento de vehículos. Siempre buscamos resolver los problemas de los autos de nuestros
              clientes y mantener a sus vehículos en perfectas condiciones. Todos los servicios mecánicos son realizados por un equipo profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}