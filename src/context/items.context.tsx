import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

export const ItemsContext = createContext<Item[] | any>([]);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const db = await axios.get(
        "https://boutique-de-sacs-winter-night-1102.fly.dev/items"
      );
      setItems(db.data);
    };

    getItems();
  }, []);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {children}
    </ItemsContext.Provider>
  );
};
