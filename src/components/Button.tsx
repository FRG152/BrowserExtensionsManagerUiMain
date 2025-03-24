import { useGlobalContext } from "../context";

interface ButtonProps {
  name: string;
  event: (param: string) => void;
  style?: string;
  active?: boolean;
}

const Button = ({ name, active, event, style }: ButtonProps) => {
  const { theme } = useGlobalContext();
  const isActive = active
    ? `bg-red-700 ${theme === "light" ? "text-Neutral-0" : "text-Neutral-900"}`
    : `bg-Neutral-0`;

  return (
    <button
      type="button"
      onClick={() => event(name)}
      className={`${style} text-lg font-medium rounded-full transition-all cursor-pointer py-2 px-4 ${
        active && isActive
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
