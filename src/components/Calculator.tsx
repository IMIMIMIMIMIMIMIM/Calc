import { useEffect, useState } from "react";

const Calculator = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePressNumber = (value: string) => {
    setInputNumber((prev) => prev + value);
  };

  const handlePressOperation = (operation: string) => {
    if (inputNumber) {
      setInput((prev) => prev + inputNumber + operation);
      setInputNumber(""); // 연산자 입력 후 숫자 입력을 위해 inputNumber를 초기화
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const { key } = e;
    const operationsMap: { [key: string]: string } = {
      "+": "+",
      "-": "-",
      "*": "×",
      "/": "÷",
    };

    if (/\d/.test(key)) {
      handlePressNumber(key);
    } else if (operationsMap[key]) {
      handlePressOperation(operationsMap[key]);
    } else if (key === "Enter" || key === "=") {
      // 계산식
    } else if (key === "Escape" || key === "C") {
      clearInput();
    } else if (key === "Backspace" || key === "X") {
      setInputNumber((prev) => prev.slice(0, -1));
    } else {
      e.preventDefault();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const clearInput = () => {
    setInput("");
    setInputNumber("");
    setResult("");
  };

  return (
    <div className="bg-gray-800 rounded-lg p-1">
      <div className="text-end p-4">
        <div className="text-base text-gray-500 h-6">{input || " "}</div>
        <div className="text-5xl text-white h-14">{inputNumber || " "}</div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-px text-white">
          <button className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600">
            %
          </button>
          <button className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600">
            CE
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600"
            onClick={clearInput}
          >
            C
          </button>
          <button className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600">
            X
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("7")}
          >
            7
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("8")}
          >
            8
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("9")}
          >
            9
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600"
            onClick={() => handlePressOperation("÷")}
          >
            ÷
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("4")}
          >
            4
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("5")}
          >
            5
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("6")}
          >
            6
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600"
            onClick={() => handlePressOperation("×")}
          >
            ×
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("1")}
          >
            1
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("2")}
          >
            2
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("3")}
          >
            3
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600"
            onClick={() => handlePressOperation("-")}
          >
            -
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-lg p-4 rounded w-16 md:w-20 text-black active:bg-blue-600">
            =
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressNumber("0")}
          >
            0
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-700"
            onClick={() => handlePressOperation(".")}
          >
            .
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-lg p-4 rounded w-16 md:w-20 active:bg-gray-600"
            onClick={() => handlePressOperation("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
