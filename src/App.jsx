import SortingVisualizer from "./components/SortingVisualizer"
import Nav from "./components/Nav"

function App() {
  return (
    <main className="grid grid-rows-6 bg-gray-100 w-screen h-screen">
      <Nav />
      <SortingVisualizer />
    </main>
  )
}

export default App
