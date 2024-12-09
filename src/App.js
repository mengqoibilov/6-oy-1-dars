import React from "react";
import Navbar from "./components/navbar"; 
import Ikkinchi from "./two/ikkinchi"; 
import UchinchiQism from "./Uchinchiqisim/onas";
import Turtinchiqisim from "./Turtinchiqisim/Turtinchiqisim";
import Beshinchiqisim from "./Beshinchiqisim/Beshinchiqisim";
import Oltinchiqisim from "./Oltinchiqisim/Oltinchiqisim";
import Footer from "./Footer/Footer";

export function App() {
  return (
    <div>
      {<Navbar/>}
      {<Ikkinchi />}
      {<UchinchiQism/>}
      {<Turtinchiqisim/>}
      {<Beshinchiqisim/>}
      {<Oltinchiqisim/>}
      {<Footer/>}
    </div>
  );
}
