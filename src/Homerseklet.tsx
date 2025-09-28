import { useState } from 'react'
import './App.css'

function Homerseklet() {
    const [C, setC] = useState<number>(0);
    const [resultF, setResultF] = useState<number>();
    const [resultK, setResultK] = useState<number>();
    let resF;
    let resK;
  const atvaltas = () => {
      resF = C * 1.8 + 32;
      resK = C + 273.15

      setResultF(resF);
      setResultK(resK);
  };
  return (
      <>
          <div>
              <h1>Hőmérséklet átváltó</h1>
              <input type="number" id="C" placeholder='Adja meg a celsius fokot' onChange={(e) => setC(Number(e.target.value))} />
              <button onClick={atvaltas}>Átváltás</button>

              {resultF && resultK && (
                <p>Fahranheitben: {resultF} °F <br /> Kelvinben: {resultK} °K</p>
              )}
          </div>
      </>
  );
}
export default Homerseklet
