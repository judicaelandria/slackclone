import React from "react";
import { useLocation } from "react-router-dom";
import { Message } from "../../components/Home";
import {
  useGetChannel,
  useGetChannelMessageSub,
  useSendChannelMessage,
} from "../../hooks";

const ChannelMessage = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2].replace("%20", " ");
  const { sendMessage } = useSendChannelMessage(title);
  const { channel, loading } = useGetChannelMessageSub(title);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage({
        variables: {
          channelId: channel!.id,
          content: event.currentTarget.value,
        },
      });
      textareaRef.current!.value = "";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-2 p-3 items-center border-b border-b-gray-200">
        <h1 className="text-darkBrown text-base font-medium capitalize">
          # {title.replace("%20", " ")}
        </h1>
      </div>
      <div className="min-h-80 max-h-80 overflow-auto px-4 flex flex-col justify-end pb-4">
        <div className="h-90%">
          {loading ? <span>Loading channel...</span> : null}
          <div className="flex flex-col gap-4">
            {channel?.messages?.map((message, idx) => (
              <Message
                fullname={message.sentBy?.fullname || ""}
                content={message.content}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sticky bottom-auto r-0 w-full px-3">
        <textarea
          className="w-full h-18 border border-gray-500 rounded-lg pt-6 pl-4"
          placeholder={`Message Bot`}
          onKeyDown={handleSendMessage}
          ref={textareaRef}
        />
      </div>
    </div>
  );
};
export default ChannelMessage;
