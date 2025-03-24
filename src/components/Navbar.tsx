import Logo from "../assets/images/logo.svg";
import IconSun from "../assets/images/icon-sun.svg";
import IconMoon from "../assets/images/icon-moon.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();

  const handleTheme = () => {
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`navbar ${
        theme === "light" ? "bg-Neutral-0" : "bg-Neutral-800"
      }`}
    >
      <div className="flex items-center ">
        <img src={Logo} alt="logo" />
      </div>
      <button
        type="button"
        onClick={() => handleTheme()}
        className={`w-13 h-full flex items-center justify-center cursor-pointer rounded-xl ${
          theme === "light" ? "bg-Neutral-300" : "bg-Neutral-600"
        } transition-all hover:opacity-[0.5] gap-5`}
      >
        {theme !== "light" ? (
          <img src={IconSun} alt="icon" />
        ) : (
          <img src={IconMoon} alt="icon" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
