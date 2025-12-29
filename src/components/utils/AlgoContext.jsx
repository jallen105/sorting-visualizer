import { useState, createContext, useEffect } from "react"


const defaultSettings = {
    algoType: "merge sort",
    arrayLen: 25,
    delay: 15,
}

const SettingsContext = createContext(defaultSettings)

const ItemsContext = createContext([])

const AlgoContext = ({ children }) => {

    const [settings, setSettings] = useState(defaultSettings)
    const [items, setItems] = useState([])

    useEffect(() => {
      const ranNums = []
      for (let i = 0; i < settings.arrayLen; i++) {
        ranNums.push(Math.floor(Math.random() * 540))
      }
      setItems(ranNums)
    }, [settings.arrayLen])

  return (
    <ItemsContext.Provider value={{items, setItems}}>
      <SettingsContext.Provider value={{ settings, setSettings }} >
        {children}
      </SettingsContext.Provider>
    </ItemsContext.Provider>
  )
}

export {AlgoContext, SettingsContext, ItemsContext}