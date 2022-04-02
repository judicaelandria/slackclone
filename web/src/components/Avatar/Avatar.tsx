interface AvatarProps {
  fullname: string;
  size?: "small" | "medium" | "large";
}

export const Avatar = ({ fullname, size = "small" }: AvatarProps) => {
  const randomBgColor = () => {
    const backgroundColor = [
      "bg-teal-500",
      "bg-orange-300",
      "bg-lime-500",
      "bg-purple-500",
    ];
    return backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
  };

  const initials = (name: string) => {
    let arrName = name.split(" ");
    let initFirstName = name.charAt(0);
    if (arrName.length === 1) return initFirstName;
    let initLastName = arrName[arrName.length - 1].charAt(0);
    return initFirstName + initLastName;
  };

  const avatarSize =
    size === "small" ? "w-6 h-6" : size === "medium" ? "w-8 h-8" : "w-10 h-10";
  return (
    <div
      className={`${avatarSize} rounded-md ${randomBgColor()} opacity-70 text-white text-xs flex justify-center items-center`}
    >
      {initials(fullname)}
    </div>
  );
};
