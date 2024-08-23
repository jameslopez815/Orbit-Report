import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import { useState } from "react";
//4-part instruction provide functionality for the changes in the Button and Banner

function App() {
//Create a state variable “sat” to hold which satellites are currently being displayed
  const [sat, setSat] = useState(satData);
 //Second variable, called displaySats
 //Variables use the Set method to create an array of unique values with mapping
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  //filterByType function filters the list of satellite objects based on type
  //When a button is clicked, it can find the satellites that are at that orbit type (low, medium, of high)
  const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
     
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

//Add 3 props to the <Buttons /> component
//Add 1props to the <Table /> component

  return (
  <div>
    <Banner />
    <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
    />
    <Table sat={sat} />
  </div>
  );
}

export default App;