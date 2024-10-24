import Image from "next/image";
import logo from '../../assets/logoApp.png'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <section
      className="antialiased bg-gradient-to-br from-green-100 to-white p-10 h-auto min-h-screen"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-auto min-h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <Image
                className=" mx-auto md:float-left fill-stroke text-gray-800"
                alt="App zoo logo"
                src={
                  // "https://res.cloudinary.com/dj9huldbs/image/upload/v1729744174/Dise%C3%B1o_sin_t%C3%ADtulo_2_x8axns.png"
                  logo
                }
                width={200}
                height={200}
                priority
              />
            </div>
            <h1 className="text-4xl text-gray-800 font-bold mb-5">
              App Zoo:
              {/* <span className="text-2xl mx-auto md:mx-0 text-gray-500">
                Encuentra tu zoologico mas cercano
              </span> */}
            </h1>
          </div>
          <div>

          {children}
          </div>
        </div>
      </div>
    </section>
  );
}
