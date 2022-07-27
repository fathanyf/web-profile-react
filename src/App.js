import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import EnglishHome from "./components/en-home";
import ChineseHome from "./components/cn-home";
import Navhead from "./components/navbar/Navhead";
import FooterDown from "./components/navbar/FooterDown";

const App = () => {

  return (
    <Router>
      <Navhead/>

      <Switch>
        <Route path="/" component={Home} exact>
          <Home/>    
        </Route>
        <Route path="/about" component={About} exact>
          <About/>
        </Route>
        <Route path="/blog" component={Blog} exact>
          <Blog/>
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact/>
        </Route>
        <Route path="/en-home" component={EnglishHome} exact>
          <EnglishHome/>    
        </Route>
        <Route path="/cn-home" component={ChineseHome} exact>
          <ChineseHome/>    
        </Route>
      </Switch>

      <FooterDown/>
    </Router>

  );
}

export default App;
