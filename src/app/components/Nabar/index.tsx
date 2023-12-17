"use client"

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Characters');

  const navItems = [
    { id: 1, label: 'Characters', path: '/' },
    { id: 2, label: 'Squads', path: '/squads' },
  ];

  const handlenavItemSelect = (navLabel: string) => {
    setSelectedNavItem(navLabel);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-start items-center text-white font-bold text-lg">
        <div>
          {
            navItems.map((item) => {
              const { id, label, path } = item
              return (
                <Link
                  key={id}
                  href={path}
                  onClick={() => handlenavItemSelect(label)}
                  className={`text-white p-2 m-2 font-bold text-lg ${selectedNavItem === item.label ? 'bg-gray-600' : ''
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