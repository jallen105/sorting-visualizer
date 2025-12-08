
const Nav = () => {
  return (
    <nav className="w-screen bg-gray-300 grid grid-flow-row">
        <div className="flex items-center justify-center w-full my-2 gap-5">
            <div>
                <button className="border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95">
                    Merge Sort
                </button>
            </div>
            
            <button className="underline">Sort!</button>
        </div> 
        <div className="flex flex-col items-center w-full pb-3">
            <label htmlFor="items_amount">Array Length: 25</label>
            <input 
                type="range" 
                name="items_amount" 
                id="items_amount"
                className="w-full max-w-2xl" 
                default={25}
                min={1}
            />
            <label htmlFor="delay">Delay: 15</label>
            <input 
                type="range"
                name="delay"
                id="delay"
                className="w-full max-w-2xl"
                min={3}
                default={15} 
            />
        </div>
    </nav>
  )
}

export default Nav