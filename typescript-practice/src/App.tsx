import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        ok={true}
        text={"Hello"}
        interger={1}
        person={{ firstName: "", lastName: "" }}
      />
    </div>
  );
};

export default App;
