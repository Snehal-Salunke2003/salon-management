import  React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Book from "./components/Book";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timings from "./components/Timings";

function App() {
  const placeId = 'ChIJT9asRZnr3TsRxKZKCg1P3c4';
  const apiKey = 'AIzaSyDtlzsuse0KN0q1DqNadm_6H9rP3RUk2Ss';
  return (
    <Router>
    <div className="App">
      <Routes> 
      <Route path="/" element={<>
        <Navbar/>
        <Home/>
      <About/>
      <Services/>
      <Review placeId={placeId} apiKey={apiKey}/>
      <Footer/></>
        }>
       </Route>
      
          <Route path="/book" element={<><Navbar/><Book /></>} />
          <Route path="/timings" element={<><Navbar/><Timings/></>} />
      <Route path="/contact" element={<><Navbar/><Contact/></>} /></Routes>
      
    </div>
    </Router>
  );
}
export default App;
