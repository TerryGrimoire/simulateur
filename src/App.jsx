import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import HomePizza from "./pages/HomePizza";
import MenuPizza from "./pages/MenuPizza";
import Error from "./pages/Error";

import "./App.css";

function App() {
  const helmet = {
    title: "",
    href: "https://changehref.com",
    description: "",
  };
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/:type/:id" element={<HomePizza helmet={helmet} />} />
          <Route
            path="/:type/:id/menu"
            element={<MenuPizza helmet={helmet} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
