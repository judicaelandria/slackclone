import React from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { Dropdown, ItemType } from "../components/Dropdown";
import { SidebarContent } from "../components/Home";
import { ChannelModal } from "../components/Modal";
import { Status } from "../components/Status";
import { useGetMe } from "../hooks";

const Home = () => {
  const { me } = useGetMe();

  const [openChannelModal, setOpenChannelModal] = React.useState(false);

  const [_, __, removeCookie] = useCookies(["slack-token"]);

  const items: ItemType[] = [
    {
      label: "logout",
      onClick: () => {
        removeCookie("slack-token", { path: "/" });
      },
    },
  ];

  const handleChannelModal = React.useCallback((open: boolean) => {
    setOpenChannelModal(open);
  }, []);

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
        <SidebarContent openModal={() => handleChannelModal(true)} />
        <article className="h-sidebar max-h-sidebar w-full">
          <Outlet />
        </article>
        <ChannelModal
          open={openChannelModal}
          onClose={() => handleChannelModal(false)}
        />
      </div>
    </section>
  );
};
export default Home;
