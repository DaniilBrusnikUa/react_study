import React, { useState, useEffect } from "react";
import Button from "./Button.js";
import Film from "./Film.js";

const AppCmp = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilms(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Star Wars Films</h1>
      {loading ? (
        <p>Loading films...</p>
      ) : (
        <div className="films-container">
          {films.map((film) => (
            <Film key={film.episode_id}>{film.title}</Film>
          ))}
        </div>
      )}
      <Button className="my-button" onClick={fetchData} disabled={false}>
        Load films
      </Button>
    </div>
  );
};
export default AppCmp;
/*   */
