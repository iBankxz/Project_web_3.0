import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./config/routes";


function App (){
  const route = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}></Route>
  ))
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        {route}
      </Routes>
    </BrowserRouter>
  )
}
export default App;