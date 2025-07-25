import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Mainroutes from "./routes/Mainroutes";
const app = ()=>{
  return (
    <div>
      <Navbar/>
      <Mainroutes/>
      <Footer/>
      
    </div>
  );
}
export default app;