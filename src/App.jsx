import { BrowserRouter, Routes, Route } from "react-router"
import Nav from "./components/Nav"
import CafeList from "./pages/CafeList"
import CafeDetail from "./pages/CafeDetail"
import AddCafe from "./pages/AddCafe"
import EditCafe from "./pages/EditCafe"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<CafeList />} />
        <Route path="/cafes/:id" element={<CafeDetail />} />
        <Route path="/add" element={<AddCafe />} />
        <Route path="/edit/:id" element={<EditCafe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App