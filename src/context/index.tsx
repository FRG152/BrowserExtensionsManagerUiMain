import { DATA, FILTER_OPTIONS } from "../constants/indext";
import { createContext, useContext, useState } from "react";

interface OptionsObj {
  name: string;
  value: number;
  active: boolean;
}

interface DataObj {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface GlobalContextProps {
  list: DataObj[];
  setList: React.Dispatch<React.SetStateAction<DataObj[]>>;
  options: OptionsObj[];
  setOptions: React.Dispatch<React.SetStateAction<OptionsObj[]>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState(DATA);
  const [theme, setTheme] = useState("light");
  const [options, setOptions] = useState<OptionsObj[]>(FILTER_OPTIONS);
  return (
    <GlobalContext.Provider
      value={{ list, setList, theme, setTheme, options, setOptions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext debe ser usado dentro de un GlobalProvider"
    );
  }
  return context;
};
