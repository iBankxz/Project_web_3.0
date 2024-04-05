import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./config/routes";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";


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
      <Footer/>
      <GlobalStyle/>
    </BrowserRouter>
  )
}
export default App;