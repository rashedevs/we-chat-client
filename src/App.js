import { useState } from "react";
import "./App.css";
import TextEditor from "./Pages/TextEditor";

const config = {
  buttons: [
    "bold",
    "italic",
    "strikethrough",
    "link",
    "ul",
    "ol",
    "blockquote",
    "source",
  ],
};

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="">
      <h2 className="text-center my-5">Let's Talk</h2>
      <div>
        <p>{value}</p>
      </div>
      <div>
        <TextEditor setValue={setValue} config={config}></TextEditor>
      </div>
    </div>
  );
}

export default App;
