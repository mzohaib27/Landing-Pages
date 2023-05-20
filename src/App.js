import "./App.css";
import DiscoverMore from "./File2/DiscoverMore";
import EditorsPick from "./File2/EditorsPick";
import Footer from "./File2/Footer";
import GuestAuthor from "./File2/GuestAuthor";
import Header2 from "./File2/Header2";
import HeroSection2 from "./File2/HeroSection2";

import WebCards from "./Website/WebCards";
import WebFooter from "./Website/WebFooter";
import WebHerosection from "./Website/WebHerosection";
import WebManage from "./Website/WebManage";
import WebNavbar from "./Website/WebNavbar";

function App() {
  return (
    <div>
      <div className="bg-violet-900 text-white">
        <Header2 />
        <HeroSection2 />
        <EditorsPick />
        <DiscoverMore />
        <GuestAuthor />
        <Footer />
      </div>

      <br />
      <br />
      <WebNavbar />
      <WebHerosection />
      <WebManage />
      <WebCards />
      <WebFooter />
    </div>
  );
}

export default App;
