"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@heroui/react";

export default function NavComponent() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gray-500 border-b-4 border-slate-400">
      {/* Logo */}
      <Link href="/" className="text-2xl text-white font-bold">
        Evento
      </Link>

      {/* Right Side */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown placement="bottom">
          <DropdownTrigger>
            <Button variant="bordered" className="text-white">
              Menu
            </Button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile actions" className="w-40">
            <DropdownItem
              key="register"
              onClick={() => router.push("/register")}
            >
              Register
            </DropdownItem>

            <DropdownItem key="logout">Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}

// 'use client'
// import { Navbar, NavbarBrand, NavbarContent, Dropdown,DropdownItem,DropdownTrigger,DropdownMenu,Button } from "@nextui-org/react"
// import Link from 'next/link';

// export default function NavComponent(){
//     return(
//         <Navbar
//             shouldHideOnScroll
//             isBordered
//             className="bg-gray-900 border-b-4 border-slate-400"
//         >
//             <NavbarBrand>
//                 <Link
//                     href="/"
//                     className="text-inherit text-2xl text-white"
//                 >
//                     Event0
//                 </Link>
//             </NavbarBrand>

//             <NavbarContent as="div" justify="end">
//                 <Dropdown placement="bottom-end">
//                     <DropdownTrigger>
//                         <Button variant="bordered" className="text-white">
//                             Menu
//                         </Button>
//                     </DropdownTrigger>

//                     <DropdownMenu aria-label="Profile actions" variant="flat">
//                         <DropdownItem key="register">
//                             <Link href="/register">Register</Link>
//                         </DropdownItem>
//                         <DropdownItem key="log_out">
//                             Log out
//                         </DropdownItem>
//                     </DropdownMenu>

//                 </Dropdown>
//             </NavbarContent>

//         </Navbar>
//     )
// }
