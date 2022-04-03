import { PencilAltIcon } from "@heroicons/react/solid";
import React from "react";
import { ChannelList, UsersList } from ".";
import { useGetChannels, useGetMe, useGetUsers } from "../../../hooks";

interface SidebarContentProps {
  openModal: () => void;
}

export const SidebarContent = React.memo(
  ({ openModal }: SidebarContentProps) => {
    const { me } = useGetMe();
    const { users } = useGetUsers();
    const { channels, loadingChannels } = useGetChannels();
    return (
      <aside className="bg-brown max-w-300 w-300">
        <div className="border-t border-b border-white/20 py-2 flex justify-between items-center px-4">
          <span className="text-xl text-white font-semibold">
            {me?.fullname.split(" ")[0]}
          </span>
          <PencilAltIcon
            onClick={openModal}
            className="text-white/80 w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <h4 className="text-base text-white/60 px-4">Channels</h4>
          <div className="flex flex-col">
            {loadingChannels ? (
              <span className="text-sm text-darkBrown/60">
                loading channels
              </span>
            ) : channels?.length ? (
              channels.map((channel) => (
                <ChannelList
                  name={channel!.name!}
                  access={channel!.access!}
                  key={channel.id}
                />
              ))
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <h4 className="text-base text-white/60 px-4">Direct Messages</h4>
          <div className="flex flex-col">
            {users?.map((user) => (
              <UsersList name={user.fullname} key={user.email} id={user.id} />
            ))}
          </div>
        </div>
      </aside>
    );
  }
);
