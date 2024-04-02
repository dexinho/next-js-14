import Link from "next/link";
import { NavlinkProps } from "../../types/NavlinkProps";

const Navlink = ({ path, title, bgColor, onLinkClick }: NavlinkProps) => {
  const handleLinkClick = (link: string) => onLinkClick(link);

  return (
    <Link
      className={`flex items-center p-2 h-full ${bgColor}`}
      href={path}
      onClick={() => handleLinkClick(title)}
    >
      {title}
    </Link>
  );
};

export default Navlink;
