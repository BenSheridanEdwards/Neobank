import React, { useState } from "react";
import Image from "next/image";
import { BurgerMenuButton } from "@/components/atoms/BurgerMenuButton/BurgerMenuButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="mx-auto flex w-full max-w-7xl justify-between px-8 pt-8">
      <Image
        alt="Neobank logo"
        src="/assets/NeobankLogo.svg"
        height={32}
        width={125}
      />
      <BurgerMenuButton isOpen={isOpen} onClick={toggleMenu} />
    </nav>
  );
}
