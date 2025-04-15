import React, { createContext, useState } from "react"
import { Item } from "../iterfaces/Item"

interface StockContextType {
  items: Item[];
  addItem: (item: Item) => void;
  setItems: (items: Item[]) => void;
  deleteItem: (id: string) => void;
}

export const StockContext = createContext({} as StockContextType);

function StockContextProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")!) : [])

  function addItem(item: Item) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    })
    console.log("Item added:", item);
  }
  function deleteItem(id: string) {
    const itemsRemoved = items.filter(item => item.id !== id)
    setItems(itemsRemoved)
    localStorage.setItem("items", JSON.stringify(itemsRemoved))
}
  return (
    <StockContext.Provider value={{ items, addItem, setItems, deleteItem }}>
      {children}
    </StockContext.Provider>
  );
}

export default StockContextProvider;