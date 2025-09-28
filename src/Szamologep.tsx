import { useState } from 'react'
import './App.css'

function Szamologep() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operator, setOperator] = useState<String>();
  const [result, setResult] = useState<number>();
  let res;
  const calculate = () => {
      if (operator == "+") {
        res = Number(num1) + Number(num2);
        setResult(res);
      }
      else if (operator == "-") {
        res = Number(num1) - Number(num2);
        setResult(res);
      }
      else if (operator == "*") {
        res = Number(num1) * Number(num2);
        setResult(res);
      }
      else if (operator == "/") {
        res = Number(num1) / Number(num2);
        setResult(res);
      }
        
  };
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
              <button onClick={calculate}>Számolás</button>        
        {result && (
          <p>Eredmény: {result}</p>
        )}
          </div>
      </>
  );
}
export default Szamologep
