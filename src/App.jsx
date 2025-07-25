import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Mainroutes from "./routes/mainroutes";
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