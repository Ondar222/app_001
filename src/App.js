import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Prising from "./pages/Prising/Prising";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./components/Main/Main";

const App = () => {
  return (
   <div>
    <Header />
   <Main />
    <Router>
      
      <Routes>
        <Route exast path="/" Component={Articles} />
        <Route exast path="/about" Component={About} />
        <Route exast path="/prising" Component={Prising} />
        <Route exast path="/dashboard" Component={Dashboard} />
        
      </Routes>
    </Router>
   
   </div>
  );
}

export default App;
