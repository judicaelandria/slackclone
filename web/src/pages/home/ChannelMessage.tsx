import { Message } from "../../components/Home";

const ChannelMessage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-2 p-3 items-center border-b border-b-gray-200">
        <h1 className="text-darkBrown text-base font-medium"># dev</h1>
      </div>
      <div className="min-h-80 max-h-80 overflow-auto px-4 flex flex-col justify-end pb-4">
        <div className="h-90%">
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
export default ChannelMessage;
