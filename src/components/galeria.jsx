import { useEffect, useState } from "react";

function Galery() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    getGalery();
  }, [galery]);

  const getGalery = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGalery(data);
    console.log(data)
  };

  return (
    <div className="container">
      <h1>Galery</h1>
      <p className="galery">{galery}</p>
      <button type="button" className="btn" onClick={getGalery}>
        Next Animal
      </button>
    </div>
  );
};

export default Galery;