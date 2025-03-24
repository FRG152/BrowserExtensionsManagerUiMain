import Button from "./Button";
import { DATA } from "../constants/indext";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { theme, setList, options, setOptions } = useGlobalContext();

  const handleActive = (param: string) => {
    let newArr = options.map((item) => {
      param === item.name ? (item.active = true) : (item.active = false);
      return item;
    });
    let filterArr = DATA.filter((item) => {
      if (param === "Active") return item.isActive === true;
      if (param === "Inactive") return item.isActive === false;
      return item;
    });
    setList(filterArr);
    setOptions(newArr);
  };

  return (
    <div className="flex items-center justify-center gap-5 mt-5">
      {options.map((item) => (
        <Button
          key={item.name}
          name={item.name}
          event={handleActive}
          style={`${
            theme === "light" ? "bg-Neutral-0" : "bg-Neutral-700 text-Neutral-0"
          }`}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default Filter;
