import React from "react";
import { Access } from "../../generated/graphql";
import { useCreateChannel } from "../../hooks";
import { Button } from "../Button";
import { Modal } from "./Modal";

interface ChannelModalProps {
  open?: boolean;
  onClose: () => void;
}

export const ChannelModal = ({ open, onClose }: ChannelModalProps) => {
  const [channel, setChannel] = React.useState({
    name: "",
    access: Access.Public,
  });
  const { createChannel, loading } = useCreateChannel(onClose);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setChannel({ ...channel, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createChannel({ variables: { ...channel } });
  };

  return (
    <Modal onClose={onClose} open={open} title="Create new channel">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <label htmlFor="name" className="text-darkBrown flex flex-col">
          Channel name:
          <input
            type="text"
            name="name"
            value={channel.name}
            onChange={handleChange}
            className="w-full h-11 rounded-md outline-none border border-gray-600 pl-2"
            placeholder="Your password"
            required
          />
        </label>
        <label htmlFor="access" className="text-darkBrown flex flex-col">
          Access:
          <select
            name="access"
            onChange={handleChange}
            className="w-full h-11 rounded-md outline-none border border-gray-600 pl-2"
            placeholder="Your password"
            required
          >
            <option value={Access.Public}>Public</option>
            <option value={Access.Private}>Private</option>
          </select>
        </label>
        <Button label="Create Channel" loading={loading} />
      </form>
    </Modal>
  );
};
export default ChannelModal;
