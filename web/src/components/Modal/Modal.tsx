import { XIcon } from "@heroicons/react/solid";
import React from "react";

interface ModalProps {
  open?: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactElement;
}

export const Modal = ({
  onClose,
  open = false,
  title,
  children,
}: ModalProps) => {
  const display = open ? "block" : "hidden";
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${display} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-slate-400/60`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              {title}
            </h3>
            <XIcon onClick={onClose} className="w-4 h-4" />
          </div>
          <div className="p-6 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
