import { useEffect, useState } from "react";

function Animals() {
    const [animals, setAnimal] = useState("Animal");

    useEffect(() => {
    getAnimal();
}, []);

const getAnimal = async () => {
  const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
    headers: {
      Accept: "application/json",
   },
  });
  const data = await response.json();
    setAnimal(data.value);
  };

  return (
    <div className="container">
      <h1>Animals</h1>
      <p className="animals">{animals}</p>
      <button type="button" className="btn" onClick={getAnimal}>
        Another Animal
      </button>
    </div>
  );
};

export default Animals;