import { Avatar } from "../Avatar";

interface StatusProps {
  fullname: string;
}

export const Status = ({ fullname }: StatusProps) => {
  return (
    <div className="flex gap-4 mb-4 justify-start">
      <Avatar size="large" fullname={fullname} />
      <div className="flex flex-col gap-0">
        <h4 className="text-sm text-darkBrown font-medium">{fullname}</h4>
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-700" />
          Active
        </span>
      </div>
    </div>
  );
};
