import { useState } from "react";


function App() {
  const [number, setNumber] = useState("");
  const [sum, setSum] = useState<number | string | null>(null);

  const calculateSumOfDigits = () => {
    if (number === "") {
      setSum("Please enter a number");
      return;
    }

    const digits = number.toString().replace("-", "").split("");
    const digitSum = digits.reduce((acc, digit) => acc + Number(digit), 0);

    setSum(digitSum);
  };


  return (
    <div style={styles.container}>
      <h1>Sum of Digits Calculator</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={styles.input}
      />

      <button onClick={calculateSumOfDigits} style={styles.button}>
        Calculate Sum
      </button>

      {sum !== null && (
        <p style={styles.result}>
          Sum of digits: <strong>{sum}</strong>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "220px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default App;
