import React from "react";
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Details from "./Details.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <Router>
         <div className="App">
          <Navbar/>
    <Routes>
<Route exact path="/"  Component={Home}/>
  <Route path="/create" Component={Create} />
  <Route path="/blogs/:id" Component={Details}/>
  <Route path="*" Component={NotFound}/>

  

</Routes>
        </div>
        </Router>
  );
}

export default App;
