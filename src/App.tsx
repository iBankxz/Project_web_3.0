import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";


function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}></Route>
        <Route path="/about" element={<div>Admin</div>}></Route>
        <Route path="/products" element={<div>Admin</div>}></Route>
        <Route path="/contact" element={<div>Admin</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;