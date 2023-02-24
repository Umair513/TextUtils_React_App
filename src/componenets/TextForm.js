import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = "";
    setText(newText);
  };

  const handleGmailClick = () => {
    if (
      text.includes("@gmail.com") ||
      text.includes("@yahoo") ||
      text.includes("@hotmail.com")
    ) {
      alert("Yes Text contains emails");
    } else {
      alert("No Text doesn't contain E-mails");
    }
  };
  const handleIncludeClick = () => {
    if (text.includes("?")) {
      alert("Yes text contain question");
    } else {
      alert("no text does'nt contain question mark ");
    }
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,999999);
    navigator.clipboard.writeText(text.value);
    alert("Text Successfully Copied to Clipboard")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear All Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleIncludeClick}>
          Include Questions?
        </button>
        <button className="btn btn-primary mx-2" onClick={handleGmailClick}>
          Contain E-mails?
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 xy-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          You will need {text.split(" ").length * 0.08} minutes to finish this
          reading
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
