import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./config/routes";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { useEffect, useState } from "react";

function App (){
  return(
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    setIsLoginPage(location.pathname === '/login');
  }, [location]);

  return(
    <>
      {!isLoginPage && <Menu />}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isLoginPage && <Footer />}
      <GlobalStyle />
    </>
  )
}

export default App;