import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Ritrisha Choudhury"
        School="VIT-AP University"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;