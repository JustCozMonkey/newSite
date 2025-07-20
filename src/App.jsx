import React from "react"
import { Route, Routes, BrowserRouter } from "react-router"
import Layer from "./blocks/Layer"
import Home from "./pages/Home"
import About from "./pages/About"
import Support from "./pages/Support"
import Shop from "./pages/Shop"
import Products from "./blocks/Products"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layer />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
            <Route path="shop" element={<Shop />} >
              <Route index element={<Products />} ></Route>
              <Route path="p/:id" element={<Products />} ></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
