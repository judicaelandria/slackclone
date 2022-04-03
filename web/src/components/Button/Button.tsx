interface ButtonProps {
  label: string;
  loading?: boolean;
}

export const Button = ({ label, loading }: ButtonProps) => {
  return (
    <button
      className="w-full h-11 bg-brown rounded-md text-white"
      type="submit"
    >
      {loading ? "Loading" : label}
    </button>
  );
};
