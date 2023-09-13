import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Create from "./components/employee/Create";
import { Routes, Route } from "react-router-dom";
import Search from "./components/employee/Search";
import MultipleTabs from "./components/more/MultipleTabs";
import Menu from "./components/more/Menu";
import { useEffect, useState } from "react";
import Collapse from "./components/more/Collapse";
import Slider from "./components/more/Slider";
import Tooltip from "./components/more/Tooltip";
import Popup from "./components/more/Popup";
import Links from "./components/more/Links";
import Cssprop from "./components/more/Cssprop";
import IFrames from "./components/more/IFrames";
import Auto from "./components/more/Auto";
import Settings from "./components/Settings";
import Update from "./components/employee/Update";
import Images from "./components/more/Images";
import { Toaster } from "react-hot-toast";

function App() {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth <= 768);
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebar(prev => !prev)
  }

  return (
    <div className="app">
      <Navbar width={windowDimensions} sidebarFunc={toggleSidebar} isSidebar={isSidebar}/>
      {(windowDimensions && isSidebar) || <Sidebar width={windowDimensions} IsSidebar={isSidebar}/>}
      <div className="content-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/multitabs" element={<MultipleTabs />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/collapse" element={<Collapse />} />
          <Route exact path="/slider" element={<Slider />} />
          <Route exact path="/tooltips" element={<Tooltip />} />
          <Route exact path="/popups" element={<Popup />} />
          <Route exact path="/links" element={<Links />} />
          <Route exact path="/cssprop" element={<Cssprop />} />
          <Route exact path="/frames" element={<IFrames />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/autocomplete" element={<Auto />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Toaster />
      <Footer width={windowDimensions}/>
    </div>
  );
}

export default App;
