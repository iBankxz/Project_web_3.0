import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./config/routes";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { Fragment } from "react/jsx-runtime";


function App (){
  const route = routes.map((route) => (
    <Fragment key={route.path}>
      <Route path={route.path} element={route.element}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Fragment>
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