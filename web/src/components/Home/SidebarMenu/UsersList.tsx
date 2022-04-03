import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "../../Avatar";

interface MessageListProps {
  name: string;
  id: string;
}

export const UsersList = React.memo(({ name, id }: MessageListProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`direct/${name.trim()}`, { state: id })}
      className="flex items-center gap-4 px-4 text-white/60 hover:bg-darkBrown py-1 cursor-pointer"
    >
      <Avatar fullname={name} />
      <h4 className="text-sm truncate">{name}</h4>
    </div>
  );
});
