import React, { useCallback, useEffect, useState } from "react";

const Quiz = () => {
  const OperationsArr = ["+", "-", "×", "÷"];
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [sign, setSign] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [value, setValue] = useState("");
  const [again, setAgain] = useState(false);

  const generateRandomValues = () => {
    setNumberA(Math.floor(Math.random() * 10) + 1);
    setNumberB(Math.floor(Math.random() * 10) + 1);
    setSign(OperationsArr[Math.floor(Math.random() * 4)]);
  };

  useEffect(() => {
    generateRandomValues();
  }, []);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const onSubmitHandler = useCallback(() => {
    if (value.trim() === "") {
      alert("정답을 입력해 주세요.");
      return;
    }
    console.log(result);
    switch (sign) {
      case "+":
        setResult(numberA + numberB);
        break;
      case "-":
        setResult(numberA - numberB);
        break;
      case "×":
        setResult(numberA * numberB);
        break;
      case "÷":
        setResult(parseFloat((numberA / numberB).toFixed(1))); // 소수점 둘째 자리에서 반올림
        break;
    }
    setAgain(true);
  }, [numberA, numberB, sign, value]);

  const compare = () => {
    if (Number(value) === result) {
      return "correct";
    } else {
      return `incorrect 정답: ${result}`;
    }
  };

  const onAgainHandler = () => {
    setResult(null);
    setValue("");
    generateRandomValues();
    setAgain(false);
  };

  return (
    <>
      <div className="item-middle flex-col gap-4 ">
        <h1>
          {numberA} {sign} {numberB}
        </h1>
        <input
          type="number"
          placeholder="정답을 입력하세요"
          value={value}
          onChange={onChangeHandler}
          disabled={result !== null}
        />
        <button
          type="submit"
          onClick={onSubmitHandler}
          disabled={result !== null}
        >
          확인
        </button>
        {result !== null && <p>결과: {compare()}</p>}
        {again && <button onClick={onAgainHandler}>다시하기</button>}
      </div>
    </>
  );
};

export default Quiz;
