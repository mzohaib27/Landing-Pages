import "./App.css";
import DiscoverMore from "./File2/DiscoverMore";
import EditorsPick from "./File2/EditorsPick";
import Footer from "./File2/Footer";
import GuestAuthor from "./File2/GuestAuthor";
import Header2 from "./File2/Header2";
import HeroSection2 from "./File2/HeroSection2";

// Netflix Clone
import NetflixNav from "./NetflixClone/NetflixNav";
import TVSec from "./NetflixClone/TVSec";
import Download from "./NetflixClone/Download";

import WebCards from "./Website/WebCards";
import WebFooter from "./Website/WebFooter";
import WebHerosection from "./Website/WebHerosection";
import WebManage from "./Website/WebManage";
import WebNavbar from "./Website/WebNavbar";
import Everywhere from "./NetflixClone/Everywhere";
import Kids from "./NetflixClone/Kids";
import NetFAQ from "./NetflixClone/NetFAQ";
import NetFooter from "./NetflixClone/NetFooter";

function App() {
  return (
    <div>
      {/* <div className="bg-violet-900 text-white">
        <Header2 />
        <HeroSection2 />
        <EditorsPick />
        <DiscoverMore />
        <GuestAuthor />
        <Footer />
      </div> */}

      {/* <br />
      <br />
      <WebNavbar />
      <WebHerosection />
      <WebManage />
      <WebCards />
      <WebFooter /> */}

      {/* Netflix */}
      <div>
        <NetflixNav />
        <TVSec />
        <Download />
        <Everywhere />
        <Kids />
        <NetFAQ />
        <NetFooter />
      </div>
      {/* Next */}
    </div>
  );
}

export default App;
