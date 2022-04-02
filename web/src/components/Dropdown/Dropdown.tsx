import React from "react";
import { Avatar } from "../Avatar";

export type ItemType = {
  label: string;
  onClick: () => void;
};

interface DropdownProps {
  header: React.ReactChild;
  items: ItemType[];
  userChildItem?: React.ReactChild;
}

export const Dropdown = ({ header, items, userChildItem }: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)}>{header}</button>
      {open ? (
        <div
          id="dropdown"
          className="origin-top-right absolute right-0 mt-2 min-w-min w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none p-4 duration-200"
        >
          <ul
            className="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            {userChildItem}
            {items.map((item) => (
              <li
                onClick={item.onClick}
                className="cursor-pointer"
                key={item.label}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
