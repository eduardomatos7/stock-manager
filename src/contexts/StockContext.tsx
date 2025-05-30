import React, { createContext, useState } from "react"
import { Item } from "../iterfaces/Item"

interface StockContextType {
  items: Item[];
  addItem: (item: Item) => void;
  setItems: (items: Item[]) => void;
  deleteItem: (id: string) => void;
  editItem: boolean
  setEditItem: (editItem: boolean) => void;
  editItemId: string | null
  setEditItemId: (editItemId: string | null) => void;
  editItemFunc: (id: string, uptadeItem: Item) => void;
  itemsIndDate: Item[]
  itemsOut: Item[]
}

export const StockContext = createContext({} as StockContextType);

function StockContextProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>(localStorage.getItem("items") ? 
  JSON.parse(localStorage.getItem("items")!) : [])
  const [editItem, setEditItem] = useState(false)
  const [editItemId, setEditItemId] = useState<string | null>(null)
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
    alert("Item excluído!")
}
  function editItemFunc(id: string, uptadeItem: Item) {
      items.find(item => {
      if (item.id === id) {
        item.nome = uptadeItem.nome
        item.quantidade = uptadeItem.quantidade
        item.preco = uptadeItem.preco
        item.categoria = uptadeItem.categoria
        item.descricao = uptadeItem.descricao
        item.dataAtualizacao = uptadeItem.dataAtualizacao
        localStorage.setItem("items", JSON.stringify(items))
        return 
      }
    })
  }
  const dateCurrent = new Date().toLocaleDateString('pt-BR').split('/')[0]

    const itemsIndDate = items.filter((item) => {
        const itemsValid = item.dataCadastro.split('/')[0]
        return Number(dateCurrent) - Number(itemsValid) <= 10
    })
    
    const itemsOut = items.filter((item) => {
        const itemsValid = item.quantidade
        return Number(itemsValid) < 10
    })

  return (
    <StockContext.Provider value={{ 
      items, 
      addItem, 
      setItems, 
      deleteItem, 
      editItem, 
      setEditItem, 
      editItemId, 
      setEditItemId, 
      editItemFunc, 
      itemsIndDate, 
      itemsOut }}>
      {children}
    </StockContext.Provider>
  );
}

export default StockContextProvider;