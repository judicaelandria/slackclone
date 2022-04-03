import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import { Message } from "../../components/Home";
import {
  useGetMessages,
  useMessagesSubscription,
  useSendMessage,
} from "../../hooks";

const DirectMessage = () => {
  const location = useLocation();
  const name = location.pathname.split("/")[2].replace("%20", " ");
  const { messages } = useGetMessages(String(location.state));
  const { sendMessage } = useSendMessage();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const { subMessages } = useMessagesSubscription(String(location.state));

  const allMessages = React.useMemo(() => {
    if (messages?.length && subMessages?.length)
      return [...messages, ...subMessages];
    else return messages;
  }, [subMessages, messages]);

  const handleSendMessage = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage({
        variables: {
          receiverId: String(location.state),
          content: event.currentTarget.value,
        },
      });
      textareaRef.current!.value = "";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-2 p-3 items-center border-b border-b-gray-200">
        <Avatar fullname="Bot" size="medium" />
        <h1 className="text-darkBrown text-base font-medium">{name}</h1>
      </div>
      <div className="min-h-80 max-h-80 overflow-auto px-4 flex flex-col  pb-4">
        <div className="h-90%">
          <div className="flex items-center gap-4 mb-4">
            <Avatar fullname="Bot" size="large" />
            <div className="flex flex-col gap-0">
              <h4 className="text-darkBrown font-medium">{name}</h4>
              <p className="text-darkBrown/80 text-sm">
                This is the very beginning of your direct message history with{" "}
                <span className="text-blue-700">{name}</span>. Only the two of
                you are in this conversation, and no one else can join it
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {allMessages?.map((message, idx) => (
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
          ref={textareaRef}
          onKeyDown={handleSendMessage}
        />
      </div>
    </div>
  );
};
export default DirectMessage;
