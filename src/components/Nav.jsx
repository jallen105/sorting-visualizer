import { useContext } from "react"
import { SettingsContext } from "./utils/AlgoContext"

const Nav = () => {

    const {settings, setSettings} = useContext(SettingsContext)

    const handleChange = (e) => {
        if (e.target.name === 'delay') {
            setSettings({...settings, delay: e.target.value})
        } else {
            setSettings({...settings, arrayLen: e.target.value * 5 })
        }
    }

    const handleClick = (sortType) => {
        setSettings({...settings, algoType: sortType })
    }

  return (
    <nav className="w-screen bg-gray-300 grid grid-flow-row">
        <div className="flex items-center justify-center w-full my-2 gap-5">
            <div>
                <button 
                    className="border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95"
                    onClick={() => handleClick('merge sort')}    
                >
                    Merge Sort
                </button>
            </div>
            
            <button className="underline">Sort!</button>
        </div> 
        <div className="flex flex-col items-center w-full pb-3">
            <label htmlFor="items_amount">Array Length: {settings.arrayLen}</label>
            <input 
                type="range" 
                name="items_amount" 
                id="items_amount"
                className="w-full max-w-2xl" 
                defaultValue={25}
                min={1}
                onChange={handleChange}
            />
            <label htmlFor="delay">Delay: {settings.delay}</label>
            <input 
                type="range"
                name="delay"
                id="delay"
                className="w-full max-w-2xl"
                min={3}
                defaultValue={15}
                onChange={handleChange} 
            />
        </div>
    </nav>
  )
}

export default Nav