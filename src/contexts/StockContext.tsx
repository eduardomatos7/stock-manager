import React, { createContext, useState } from "react"
import { Item } from "../iterfaces/Item"
export const StockContext = createContext({})

function StockContextProvider({ children }: { children: React.ReactNode }) {
    const [item, setItem] = useState<Item>()

  return (
    <StockContext.Provider value={{item}}>
        {children}
    </StockContext.Provider>
  )
}

export default StockContextProvider