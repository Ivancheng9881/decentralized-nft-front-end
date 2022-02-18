import { useEffect } from "react";

function Filter({ setActiveTrait, activeTrait, setFiltered, data }) {
  useEffect(() => {
    if (activeTrait === "Blue Fire Bolt") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((chibi) =>
      chibi.attributes[6].value.includes(activeTrait)
    );
    setFiltered(filtered);
  }, [activeTrait]);
  
  return (
    <div className="filter-container">
      <button onClick={() => setActiveTrait("Blue Fire Bolt")}>
        Fire Ball
      </button>
    </div>
  );
}

export default Filter;
