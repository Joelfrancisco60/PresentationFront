import React, { useState } from "react";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [isReset, setIsReset] = useState(false);

  const handleButtonClick = (buttonValue) => {
    if (!isNaN(buttonValue) || buttonValue === ".") {
      handleNumberInput(buttonValue);
    } else if (["+", "-", "x", "/"].includes(buttonValue)) {
      handleOperator(buttonValue);
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "RESET") {
      resetCalculator();
    } else if (buttonValue === "DEL") {
      deleteLastDigit();
    }
  };

  const handleNumberInput = (num) => {
    if (isReset) {
      setCurrentValue(num);
      setIsReset(false);
    } else {
      setCurrentValue((prev) =>
        prev === "0" && num !== "." ? num : prev + num
      );
    }
  };

  const handleOperator = (op) => {
    if (currentValue === "") return;

    if (previousValue !== null) {
      calculateResult(op);
    } else {
      setPreviousValue(currentValue);
      setCurrentValue("0");
    }

    setOperator(op);
  };

  const calculateResult = (nextOperator = null) => {
    if (!previousValue || !operator) return;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    let result = 0;
    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "/":
        result = current !== 0 ? previous / current : "Error";
        break;
      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue(nextOperator ? result.toString() : null);
    setOperator(nextOperator);
    setIsReset(!nextOperator);
  };

  const resetCalculator = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const deleteLastDigit = () => {
    setCurrentValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  return (
    <div className="calculator">
      <ThemeSwitcher theme={1} onThemeChange={() => {}} />
      <Display value={currentValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
