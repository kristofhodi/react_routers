import { useState } from 'react'
import './App.css'

function Atvalto() {
  const [Ft, setFt] = useState<number>(0);
  const [operator, setOperator] = useState<String>("$");
  const [result, setResult] = useState<number>();
  let res;
  const atvaltas = () => {
      if (operator == "$") {
        res = Number(Ft) / Number(350);
        setResult(res);
      }
      else if (operator == "€") {
        res = Number(Ft) / Number(400);
        setResult(res);
      }
      
        
  };
  return (
      <>
      <div>
        <h1>Pénz átváltó</h1>
              <input type="number" id="Ft" onChange={(e) => setFt(Number(e.target.value))} />
              <select id="operation" onChange={(e) => setOperator(e.target.value)}>
                  <option value="$">$</option>
                  <option value="€">€</option>
              </select>
        <button onClick={atvaltas}>Számolás</button>
        {result && (
          <p>Eredmény: {result.toFixed(2)} {operator}</p>
        )}
          </div>
      </>
  );
}
export default Atvalto
