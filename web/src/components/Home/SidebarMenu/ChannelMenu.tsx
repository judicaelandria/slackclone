import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

interface ChannelMenuProps {
  role?: "public" | "private";
  name: string;
}

export const ChannelMenu = ({ role = "public", name }: ChannelMenuProps) => {
  return (
    <Link
      to={`channel/${name.trim()}`}
      className="hover:bg-darkBrown py-1 cursor-pointer"
    >
      <div className="flex items-center gap-4 px-4 text-white/60">
        <span>
          {role === "public" ? "#" : <LockClosedIcon className="w-3 h-3" />}
        </span>
        <h4>{name}</h4>
      </div>
    </Link>
  );
};
