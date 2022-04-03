import { PencilAltIcon } from "@heroicons/react/solid";
import React from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { Dropdown, ItemType } from "../components/Dropdown";
import { ChannelList, UsersList } from "../components/Home";
import { ChannelModal } from "../components/Modal";
import { Status } from "../components/Status";
import { useGetChannels, useGetMe, useGetUsers } from "../hooks";

const Home = () => {
  const { me } = useGetMe();
  const { users } = useGetUsers();
  const { channels, loadingChannels } = useGetChannels();
  const [openChannelModal, setOpenChannelModal] = React.useState(false);

  const navigate = useNavigate();
  const [_, __, removeCookie] = useCookies(["slack-token"]);

  const items: ItemType[] = [
    {
      label: "logout",
      onClick: () => {
        removeCookie("slack-token");
        navigate("/login");
      },
    },
  ];

  return (
    <section className="w-full min-h-screen bg-red">
      <header className="bg-darkBrown w-full h-12 flex justify-end items-center px-6">
        <Dropdown
          header={<Avatar fullname={me?.fullname ?? ""} />}
          items={items}
          userChildItem={<Status fullname={me?.fullname ?? ""} />}
        />
      </header>
      <div className="flex w-full max-h-sidebar h-95">
        <aside className="bg-brown max-w-300 w-300">
          <div className="border-t border-b border-white/20 py-2 flex justify-between items-center px-4">
            <span className="text-xl text-white font-semibold">
              {me?.fullname.split(" ")[0]}
            </span>
            <PencilAltIcon
              onClick={() => setOpenChannelModal(true)}
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
        <article className="h-sidebar max-h-sidebar w-full">
          <Outlet />
        </article>
        <ChannelModal
          open={openChannelModal}
          onClose={() => setOpenChannelModal(false)}
        />
      </div>
    </section>
  );
};
export default Home;
