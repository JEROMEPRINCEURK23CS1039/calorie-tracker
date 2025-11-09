import { useState } from "react";
import "./App.css";

function App() {
  // State variables for inputs
  const [name, setName] = useState("");
  const [calorieGoal, setCalorieGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");

  // State variables for results
  const [result, setResult] = useState(null);

  // Event handler function
  const handleCalculate = () => {
    // Validation
    if (
      !name ||
      !calorieGoal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const goal = parseFloat(calorieGoal);
    const breakfastCal = parseFloat(breakfast);
    const lunchCal = parseFloat(lunch);
    const dinnerCal = parseFloat(dinner);
    const snacksCal = parseFloat(snacks);

    if (
      goal <= 0 ||
      breakfastCal < 0 ||
      lunchCal < 0 ||
      dinnerCal < 0 ||
      snacksCal < 0
    ) {
      alert("Please enter positive values for all calorie fields!");
      return;
    }

    // Calculate total and remaining calories
    const totalConsumed = breakfastCal + lunchCal + dinnerCal + snacksCal;
    const remaining = goal - totalConsumed;

    // Set result
    setResult({
      name: name,
      goal: goal,
      totalConsumed: totalConsumed,
      remaining: remaining,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🍎 Calorie Tracker App</h1>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Daily Calorie Goal:</label>
          <input
            type="number"
            placeholder="Enter daily calorie goal"
            value={calorieGoal}
            onChange={(e) => setCalorieGoal(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Breakfast Calories:</label>
          <input
            type="number"
            placeholder="Enter breakfast calories"
            value={breakfast}
            onChange={(e) => setBreakfast(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Lunch Calories:</label>
          <input
            type="number"
            placeholder="Enter lunch calories"
            value={lunch}
            onChange={(e) => setLunch(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Dinner Calories:</label>
          <input
            type="number"
            placeholder="Enter dinner calories"
            value={dinner}
            onChange={(e) => setDinner(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Snacks Calories:</label>
          <input
            type="number"
            placeholder="Enter snacks calories"
            value={snacks}
            onChange={(e) => setSnacks(e.target.value)}
            className="input-field"
          />
        </div>

        <button onClick={handleCalculate} className="btn">
          Calculate Calories
        </button>

        {result !== null && (
          <div className="result-box">
            <h2>Results for {result.name}</h2>
            <p>
              <strong>Daily Calorie Goal:</strong> {result.goal} kcal
            </p>
            <p>
              <strong>Total Calories Consumed:</strong> {result.totalConsumed}{" "}
              kcal
            </p>
            <p
              className={result.remaining >= 0 ? "text-success" : "text-danger"}
            >
              <strong>Remaining Calories:</strong> {result.remaining} kcal
            </p>
            <p
              className={result.remaining >= 0 ? "text-success" : "text-danger"}
            >
              {result.remaining >= 0
                ? "✅ You are within your daily goal!"
                : "⚠️ You exceeded your daily calorie goal!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
