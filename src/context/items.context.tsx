import { createContext, useEffect, useState, ReactNode } from "react";
// import axios from "axios";
import { DocumentData } from "firebase/firestore/lite";
import { getAllDocuments } from "../utilities/firebase/firebase.utils";

export const ItemsContext = createContext<Item[] | any>([]);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<DocumentData[]>();

  useEffect(() => {
    const getItems = async () => {
      // const db = await axios.get(
      //   "https://boutique-de-sacs-winter-night-1102.fly.dev/items"
      // );
      // setItems(db.data);
      const data = await getAllDocuments();
      setItems(data);
    };

    getItems();
  }, []);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {children}
    </ItemsContext.Provider>
  );
};
