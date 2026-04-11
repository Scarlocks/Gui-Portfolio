import { lazy, Suspense, React } from "react"
import "./App.css";

import Navbar from "./Components/navbar/Navbar";
import Intro from "./Components/intro/Intro";
const Featured = lazy(() => import("./Components/featured/Featured"));
const Projects = lazy(() => import("./Components/projects/Projects"));
const Contact = lazy(() => import("./Components/contact/Contact"));
const Outro = lazy(() => import("./Components/outro/Outro"));
const Collab = lazy(() => import("./Components/collab/Collab"));
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Suspense fallback={<div id="loading">Hold on, I'm playing minecraft! ..</div>}>
        <Featured />
        <Projects />
        <Contact />
        <Outro />
        <Collab />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;