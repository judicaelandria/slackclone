import { Avatar } from "../../components/Avatar";
import { Message } from "../../components/Home";

const DirectMessage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-2 p-3 items-center border-b border-b-gray-200">
        <Avatar fullname="Bot" size="medium" />
        <h1 className="text-darkBrown text-base font-medium">Bot</h1>
      </div>
      <div className="min-h-80 max-h-80 overflow-auto px-4 flex flex-col justify-end pb-4">
        <div className="h-90%">
          <div className="flex items-center gap-4 mb-4">
            <Avatar fullname="Bot" size="large" />
            <div className="flex flex-col gap-0">
              <h4 className="text-darkBrown font-medium">Bot</h4>
              <span className="text-darkBrown/80 text-sm">
                This is the very beginning of your direct message history with
                Bot. Only the two of you are in this conversation, and no one
                else can join it
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Message fullname="Bot" content="How are you?" />
          </div>
        </div>
      </div>
      <div className="sticky bottom-auto r-0 w-full px-3">
        <textarea
          className="w-full h-18 border border-gray-500 rounded-lg pt-6 pl-4"
          placeholder={`Message Bot`}
        />
      </div>
    </div>
  );
};
export default DirectMessage;
