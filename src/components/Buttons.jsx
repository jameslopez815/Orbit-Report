import satData from "./satData";
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
// styling class centers the div
    <div className="flex-container">

//displaySats.map is used to make buttons for each orbitType
      {displaySats.map((sat, id) => {
            return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      
      <button onClick={ () => setSat(satData) }>All Orbits</button>
    </div>
  );
};

export default Buttons;