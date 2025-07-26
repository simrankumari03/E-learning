import Footer from "./component/Footer.jsx"
import Navbar from "./component/Navbar.jsx";
import Mainroutes from "./routes/mainroutes.jsx";
import React from 'react';  
const App = () => {
  return (
    <div>
      <Navbar/>
      <Mainroutes/>
      <Footer/>
    </div>
  );
}

export default App;
