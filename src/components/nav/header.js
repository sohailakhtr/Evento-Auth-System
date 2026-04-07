"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";

import Link from "next/link";

export default function NavComponent() {
  return (
    <Navbar
      // shouldHideOnScroll
      maxWidth="full"
      isBordered
      className="bg-gray-900 border-b-4 border-slate-400 py-4 p-4"
    >
      {/* LEFT */}
      <NavbarBrand className="flex-1">
        <Link href="/" className="text-2xl text-white ">
          Event0
        </Link>
      </NavbarBrand>

      {/* RIGHT */}
      <NavbarContent className="w-full flex justify-end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button className=" text-1xl text-white cursor-pointer border-1 border-white rounded">
              Menu
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="bg-white rounded p-3"
          >
            <DropdownItem
              key="register"
              className="
      px-4 py-1 rounded
      hover:bg-gray-100
      focus:outline-none
      data-[focus-visible=true]:outline-none
      data-[focus-visible=true]:ring-0
    "
            >
              <Link href="/register" className="p-2 block">
                Register
              </Link>
            </DropdownItem>

            <DropdownItem
              key="log_out"
              className="
      px-4 py-1 rounded
      hover:bg-gray-100
      focus:outline-none
      data-[focus-visible=true]:outline-none
      data-[focus-visible=true]:ring-0
    "
            >
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
