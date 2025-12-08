import { useState, createContext } from "react"


const defaultSettings = {
    algoType: "merge sort",
    arrayLen: 25,
    delay: 15,
}

const SettingsContext = createContext(defaultSettings)

const AlgoContext = ({ children }) => {

    const [settings, setSettings] = useState(defaultSettings)

  return (
    <SettingsContext.Provider value={{ settings, setSettings }} >
        {children}
    </SettingsContext.Provider>
  )
}

export {AlgoContext, SettingsContext}