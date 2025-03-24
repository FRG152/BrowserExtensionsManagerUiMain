import Button from "./Button";
import Swtich from "./Swtich";
import { useGlobalContext } from "../context";

interface DataObj {
  logo: string;
  name: string;
  isActive: boolean;
  description: string;
}

interface CardProps {
  data: DataObj;
}

const Card = ({ data }: CardProps) => {
  const { logo, name, description } = data;
  const { theme, list, setList } = useGlobalContext();

  const handleRemove = () => {
    let newArr = [];
    newArr = list.filter((item) => item.name !== name);
    setList(newArr);
  };

  return (
    <div
      className={`flex flex-col justify-between ${
        theme === "light" ? "bg-Neutral-0" : "bg-Neutral-800"
      } rounded-xl w-full h-[250px] p-4`}
    >
      <div className="flex items-start gap-x-5">
        <img src={logo} alt="img" />
        <div className="flex flex-col">
          <h3
            className={`text-2xl font-bold ${
              theme === "light" ? "text-Neutral-900" : "text-Neutral-0"
            }`}
          >
            {name}
          </h3>
          <p
            className={`${
              theme === "ligth" ? "text-Neutral-600" : "text-Neutral-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <Button
          name="Remove"
          event={handleRemove}
          style={`${
            theme === "light"
              ? "text-Neutral-900 bg-Neutral-0 hover:bg-red-700"
              : "text-Neutral-0 bg-Neutral-800 hover:bg-Neutral-700"
          }`}
        />
        <Swtich data={data} />
      </div>
    </div>
  );
};

export default Card;
