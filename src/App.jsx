import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const realut = eval(calVal);
      setCalVal(realut);
    } else {
      const dispalyValue = calVal + buttonText;
      setCalVal(dispalyValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
