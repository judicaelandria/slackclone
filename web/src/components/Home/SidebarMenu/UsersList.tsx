import { Link } from "react-router-dom";
import { Avatar } from "../../Avatar";

interface MessageListProps {
  name: string;
}

export const UsersList = ({ name }: MessageListProps) => {
  return (
    <Link
      to={`direct/${name.trim()}`}
      className="hover:bg-darkBrown py-1 cursor-pointer"
    >
      <div className="flex items-center gap-4 px-4 text-white/60">
        <Avatar fullname={name} />
        <h4 className="text-sm truncate">{name}</h4>
      </div>
    </Link>
  );
};
