import { Header } from "@/components/layouts/Header";
import { Sidebar } from "@/components/layouts/Sidebar";
import { AiTwotoneControl } from "react-icons/ai";
import { IoHomeOutline,IoPersonOutline  } from "react-icons/io5";


export default function AdminZooLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const nameZoo='App Zoo';

  const menuItems=[
    {
        path:'/adminapp',
        icon: <IoHomeOutline size={30} />,
        title: 'Dashboard',
    },
    {
        path:'/adminapp/control',
        icon: <AiTwotoneControl size={30}/>,
        title: 'Dashboard',
    },
    {
        path:'/adminapp/Profile',
        icon: <IoPersonOutline  size={30}/>,
        title: 'Dashboard',
    },
  ]
  
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      {/* <!-- Header --> */}
     <Header nameZoo={nameZoo}/>
      {/* <!-- ./Header --> */}

      <Sidebar menuItems={menuItems}/>
      {/* <!-- Sidebar --> */}
  
      <main className="flex-grow p-8 ml-14 md:ml-64 mt-14">
        {children}
      </main>
    </div>
  );
}
