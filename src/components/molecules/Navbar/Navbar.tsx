import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BurgerMenuButton } from "@/components/atoms/BurgerMenuButton/BurgerMenuButton";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto flex w-full max-w-7xl justify-between bg-[#00040f] px-8 py-8">
      <Link href="/">
        <Image
          alt="Neobank logo"
          src="/assets/NeobankLogo.svg"
          height={32}
          width={125}
        />
      </Link>
      <BurgerMenuButton />
      <ul className="hidden font-medium text-white/70 sm:items-center sm:space-x-8 md:flex">
        <li>
          <a href="#why-use-us" className="hover:text-white">
            Why Use Us
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#download" className="hover:text-white">
            Download Our App
          </a>
        </li>
        <li>
          <a href="#get-in-touch" className="hover:text-white">
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
