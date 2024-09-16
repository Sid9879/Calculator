import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display";

function App() {
  const onclickbutton = (buttonname) => {
    console.log(buttonname);
    if (buttonname === "AC") {
      setCount("");
    } else if (buttonname === "C") {
      setCount(count.slice(0, -1));
    } else if (buttonname === "=") {
      const result = eval(count);
      setCount(result.toString());
    } else {
      const newdisplayvalue = count + buttonname;
      setCount(newdisplayvalue);
    }
  };
  const [count, setCount] = useState("");

  return (
    <>
      <div>
        <div className="calculator">
          <Display count={count}></Display>
          <Button onclickbutton={onclickbutton}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
