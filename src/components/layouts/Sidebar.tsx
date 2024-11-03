import Link from "next/link";

interface MenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
}

interface Props {
  menuItems: MenuItem[];
}


export const Sidebar = ({menuItems}:Props) => {
  const profileItem = menuItems.find(item => item.title === 'Perfil');
  const mainItems = menuItems.filter(item => item.title !== 'Perfil');

  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-green-primary-500 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5 hidden md:block">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
              Main
            </div>
          </div>
        </li>
        {mainItems.map(item => (
            <li key={item.title}>
              <Link href={item.path} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                  <span className="inline-flex justify-center items-center ml-4">
                    {item.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {item.title}
                  </span>
              </Link>
            </li>
          ))}
       
        <li className="px-5 hidden md:block">
          <div className="flex flex-row items-center mt-5 h-8">
            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
              Settings
            </div>
          </div>
        </li>
        {profileItem && (
            <li>
              <Link href={profileItem.path} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                  <span className="inline-flex justify-center items-center ml-4">
                    {profileItem.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {profileItem.title}
                  </span>
              </Link>
            </li>
          )}
      </ul>
      <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
        Copyright @2021
      </p>
    </div>
  </div>
  )
}
