import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-background px-6 py-4">
      <Image src="/logo.svg" alt="Aparatus" width={91} height={24} />
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
