import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { Dropdown, ItemType } from "../components/Dropdown";
import { ChannelMenu, MessageMenu } from "../components/Home";
import { Status } from "../components/Status";
import { useGetMe } from "../hooks";

const Home = () => {
  const { me } = useGetMe();
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
    <section className="w-full min-h-screen bg-white">
      <header className="bg-darkBrown w-full h-12 flex justify-end items-center px-6">
        <Dropdown
          header={<Avatar fullname={me?.fullname ?? ""} />}
          items={items}
          userChildItem={<Status fullname={me?.fullname ?? ""} />}
        />
      </header>
      <div className="flex w-full h-sidebar max-h-sidebar">
        <aside className="bg-brown max-w-300 w-300">
          <h1 className="border-t border-b border-white/20 py-2">
            <span className="text-xl text-white font-semibold px-4">
              Novity
            </span>
          </h1>
          <div className="flex flex-col gap-2 mt-6">
            <h4 className="text-base text-white/60 px-4">Channels</h4>
            <div className="flex flex-col">
              <ChannelMenu name="dev" />
              <ChannelMenu name="learning" role="private" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <h4 className="text-base text-white/60 px-4">Direct Messages</h4>
            <div className="flex flex-col">
              <MessageMenu name="Judicael Andriamahandry" />
            </div>
          </div>
        </aside>
        <article className="h-sidebar max-h-sidebar w-full">
          <Outlet />
        </article>
      </div>
    </section>
  );
};
export default Home;
