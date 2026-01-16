import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const MenuItem = ({ href, Icon, label }: MenuItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 w-[95%] px-4 py-5 rounded-lg transition-colors
        ${
          isActive
            ? "text-main-purple bg-main-purple/20"
            : "text-gray-400 hover:text-main-purple"
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="ml-8 text-2xl tracking-wide font-semibold">{label}</span>
    </Link>
  );
};

export default MenuItem;
