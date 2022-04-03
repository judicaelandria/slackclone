import { Avatar } from "../../Avatar";

interface MessageProps {
  fullname: string;
  content: string;
}

export const Message = ({ fullname, content }: MessageProps) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar fullname={fullname} size="large" />
      <div className="flex flex-col gap-0">
        <span className="text-darkBrown/80 text-sm">{content}</span>
      </div>
    </div>
  );
};
