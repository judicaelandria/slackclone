import { Link } from "react-router-dom";
import { Avatar } from "../../Avatar";

interface MessageMenuProps {
  name: string;
}

export const MessageMenu = ({ name }: MessageMenuProps) => {
  return (
    <Link
      to={`direct/${name.trim()}`}
      className="hover:bg-darkBrown py-1 cursor-pointer"
    >
      <div className="flex items-center gap-4 px-4 text-white/60">
        <Avatar fullname={name} />
        <h4>{name}</h4>
      </div>
    </Link>
  );
};
