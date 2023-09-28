import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Routing from "pages";
import "./index.css";

const appTitle = "Fitness";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
      <Routing />
    </HelmetProvider>
  );
};

export default App;
