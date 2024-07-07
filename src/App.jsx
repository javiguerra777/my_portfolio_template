import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container");
    if (navigationContainer) {
      navigationContainer.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
