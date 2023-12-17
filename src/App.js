import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ContactPage from "./components/Contact/ContactPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
