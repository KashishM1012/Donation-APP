import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import First from "./pages/First";
import New from "./pages/New";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CertificateTemplate from "./pages/CertificateTemplate";
import CertificatePage from "./pages/CertifictePage";
import Sign from "./pages/Sign";
import Food from "./pages/Food";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/new" exact component={New} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/first" exact component={First} />
          <Route path="/sign" exact component={Sign} />
          <Route path="/certificateTemplate" exact component={CertificateTemplate} />
          <Route path="/certificatePage" exact component={CertificatePage} />
          <Route path="/food" exact component={Food} />
          <Route path="/payment" exact component={Payment} />



    
        
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;