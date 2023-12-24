import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface Item_img_url {
  id: number;
  is_main_img: boolean;
  item_img_url: string;
};

interface Item {
  id: string;
  item_name: string;
  item_desc: string;
  item_price: number;
  item_img_urls: Item_img_url[];
};

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
