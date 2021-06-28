import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";

function Header() {
  return(
    <header>
      <h1>ShapeAI Bootcamps</h1>
    </header>   
  );
}

export default Header;
function App() {
  return(
    <div>
      <Header />
      <Footer />
      <Info />
      <Info />
      <Info />
    </div>  
  );
}

export default App;