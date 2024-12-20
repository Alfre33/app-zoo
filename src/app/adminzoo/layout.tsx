import { Header } from "@/components/layouts/Header";
import { Sidebar } from "@/components/layouts/Sidebar";
import { AiTwotoneControl } from "react-icons/ai";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineInsertInvitation } from "react-icons/md";


export default function AdminZooLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const nameZoo='Club de los animalitos';

  const menuItems=[
    {
        path:'/adminapp',
        icon: <IoHomeOutline size={30} />,
        title: 'Dashboard',
    },
    {
        path:'/adminzoo/controlanimal',
        icon: <AiTwotoneControl size={30}/>,
        title: 'Control de animales',
    },
    {
        path:'/adminzoo/reporteszoo',
        icon: <TbReport  size={30}/>,
        title: 'Reportes',
    },
    {
        path:'/adminzoo/ticketzoo',
        icon: <BsTicketPerforated  size={30}/>,
        title: 'Boletos',
    },
    {
        path:'/adminzoo/visitaszoo',
        icon: <MdOutlineInsertInvitation  size={30}/>,
        title: 'Control de visitantes',
    },
    {
        path:'/adminzoo/profile',
        icon: <IoPersonOutline  size={30}/>,
        title: 'Perfil',
    },
  ]
  
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      {/* <!-- Header --> */}
      <Header nameZoo={nameZoo}/>
      {/* <!-- ./Header --> */}

      {/* <!-- Sidebar --> */}
      <Sidebar menuItems={menuItems}/>
      <main className="flex-grow p-8 ml-14 md:ml-64 mt-14">
        {children}
      </main>
    </div>
  );
}
