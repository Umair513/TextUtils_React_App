import "./App.css";

import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below"/>
       
      </div>
      
    </>
  );
}

export default App;
