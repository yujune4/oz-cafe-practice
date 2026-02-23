import { createContext, useState } from "react";
import data from "../assets/data";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuData] = useState(data.menu); // 🔥 여기 .menu 추가

  return (
    <MenuContext.Provider value={{ menu: menuData }}>
      {children}
    </MenuContext.Provider>
  );
}



