import { useState } from "react";
import "./App.css";

function Bmi() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>();
  const [category, setCategory] = useState<string>();

  const calculateBmi = () => {
    if (weight <= 0 || height <= 0) {
      alert("A testsúly és a magasság nem lehet nulla vagy negatív!");
      return;
    }

    const heightInMeters = height / 100; 
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(Number(bmiValue.toFixed(1)));

    let cat = "";
    if (bmiValue < 16) cat = "Súlyos soványság";
    else if (bmiValue >= 16 && bmiValue <= 16.9) cat = "Mérsékelt soványság";
    else if (bmiValue >= 17 && bmiValue <= 18.4) cat = "Enyhe soványság";
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) cat = "Normál testsúly";
    else if (bmiValue >= 25 && bmiValue <= 29.9) cat = "Túlsúlyos";
    else if (bmiValue >= 30 && bmiValue <= 34.9) cat = "Elhízott (I. fokú)";
    else if (bmiValue >= 35 && bmiValue <= 39.9) cat = "Elhízott (II. fokú)";
    else if (bmiValue >= 40) cat = "Súlyosan elhízott (III. fokú)";

    setCategory(cat);
  };

  return (
    <div className="App">
      <h1>BMI kalkulátor</h1>
      <div>
        <label>
          Testsúly (kg):{" "}
          <input
            type="number"
            min="1"
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Magasság (cm):{" "}
          <input
            type="number"
            min="1"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateBmi}>Számítás</button>

      {bmi && (
        <p>
          BMI érték: <strong>{bmi}</strong> <br />
          Kategória: <strong>{category}</strong>
        </p>
      )}
    </div>
  );
}

export default Bmi;
