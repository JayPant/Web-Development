import React, { useState } from "react";
import data from './data';
import Tours from './Tours';
const App = () => {

  const[tours, setTours] = useState(data);
  return (
    <div className="app">
       <h2>Plan youour Vacation</h2>
       <Tours tours={tours}></Tours>
    </div>
  )

};

export default App;
