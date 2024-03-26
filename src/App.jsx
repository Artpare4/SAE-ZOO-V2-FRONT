import "./App.css";
import React from "react";
import Router from "./routes/routes.jsx";
import Provider from "./contexts/user/Provider.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Provider>
      <div className="App mt-24">
        <Header />
        <Router />
        <Footer />
        <script type="module" src="/src/scripts/header.jsx" />
      </div>
    </Provider>
  );
}

export default App;
