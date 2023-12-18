"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { id: 1, label: 'Characters', path: '/' },
    { id: 2, label: 'Squads', path: '/squads' },
  ];

  return (
    <nav className="bg-black fixed w-full z-10 p-4">
      <div className="container mx-auto flex justify-start items-center text-white font-bold text-lg">
        <div>
          {
            navItems.map((item) => {
              const { id, label, path } = item
              return (
                <Link
                  key={id}
                  href={path}
                  className={`text-white p-2 m-2 font-bold text-lg ${pathname === item.path ? 'bg-gray-600' : ''
                    }`}
                >
                  {label}
                </Link>
              )
            })
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar