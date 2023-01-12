import Navbar from "./component/Navbar"
import Contacts from "./component/Contacts"
import Home from "./component/Home"
import About from "./component/About"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contacts/>} />
          <Route path="/2" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App