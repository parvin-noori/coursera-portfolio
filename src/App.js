// import "./App.css";
// import { useEffect, useReducer, useRef, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
      </div>
  );
}

export default App;
