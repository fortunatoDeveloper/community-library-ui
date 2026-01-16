import Image from "next/image";
import MenuItem from "../../MenuItem";
import FriendsIcon from "../../Icons/FriendsIcon";
import BookIcon from "../../Icons/BookIcon";
import ArrowsIcon from "../../Icons/ArrowsIcon";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={`border-1 border-border-main/60 bg-white ${className}`}>
      <div className="flex border-b-1 border-border-main py-8">
        <Image
          src="./assets/logo.svg"
          className="mx-auto"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
      <ul className="flex flex-col items-start gap-6 py-10 ml-6">
              <MenuItem Icon={BookIcon} href="/" label="Minha Prateleira" />
              <MenuItem Icon={ArrowsIcon} href="/emprestimos" label="Meus Empréstimos" />
              <MenuItem Icon={FriendsIcon} href="/amigos" label="Amigos" />
      </ul>
    </nav>
  );
};

export default Navbar;
