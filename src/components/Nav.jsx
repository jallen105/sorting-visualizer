
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
    </nav>
  )
}

export default Nav