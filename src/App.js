import "./App.css";
import About from "./componenets/About";

import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below"/>
        <About/>
      </div>
      
    </>
  );
}

export default App;
