import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/NavFooter/Navbar";
import Footer from "./component/NavFooter/Footer";
import Main from "./component/pages/Main";
import TopBtn from "./component/utilis/TopBtn";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
      <TopBtn />
    </div>
  );
}

export default App;
