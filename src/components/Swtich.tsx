import { useGlobalContext } from "../context";

interface DataObj {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface SwitchProps {
  data: DataObj;
}

const Swtich = ({ data }: SwitchProps) => {
  const { list, setList } = useGlobalContext();

  const handleSwitch = () => {
    const newArr = list.map((item) =>
      item.name === data.name ? { ...item, isActive: !item.isActive } : item
    );
    setList(newArr);
  };

  return (
    <button
      type="button"
      onClick={() => handleSwitch()}
      className={`h-[30px] w-[60px] relative cursor-pointer rounded-full ${
        !data.isActive ? "bg-Neutral-200" : "bg-red-700"
      }`}
    >
      <div
        className={`w-[25px] h-[25px] rounded-full bg-Neutral-0  transition-all absolute top-0 bottom-0 ${
          !data.isActive ? "left-[4px]" : "right-[4px]"
        } m-auto`}
      />
    </button>
  );
};

export default Swtich;
