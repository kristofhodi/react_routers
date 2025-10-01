import { useEffect, useState } from 'react'
import './App.css'

function Szamologep() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operator, setOperator] = useState<string>("+");
  const [result, setResult] = useState<number>();

  useEffect(() => {
    if (operator === "+") setResult(num1 + num2);
    else if (operator === "-") setResult(num1 - num2);
    else if (operator === "*") setResult(num1 * num2);
    else if (operator === "/") setResult(num1 / num2);
  }, [num1, num2, operator]);

  //   const calculate = () => {
  //   if (operator === "+") setResult(num1 + num2);
  //   else if (operator === "-") setResult(num1 - num2);
  //   else if (operator === "*") setResult(num1 * num2);
  //   else if (operator === "/") setResult(num1 / num2); 
      
  // };
  return (
      <>
      <div>
        <h1>Számológép</h1>
              <input type="number" id="num1" onChange={(e) => setNum1(Number(e.target.value))} />
              <select id="operarion" onChange={(e) => setOperator(e.target.value)}>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
              </select>
              <input type="number" id="num2" onChange={(e) => setNum2(Number(e.target.value))} />
        {result && (
          <p>Eredmény: {result}</p>
        )}
          </div>
      </>
  );
}
export default Szamologep
