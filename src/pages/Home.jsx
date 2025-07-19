import { useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const KEY = "6d2ac224";

function Home() {
  const [movieData, setmovieData] = useState({
    Poster: "",
    Title: "",
    Year: "",
    Type: "",
    Ratings: "",
    Director: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    BoxOffice: "",
  });

  const [movieSearch, setmovieSearch] = useState("");

  const handleSearch = async () => {
    if (movieSearch === "") {
      return alert("Enter a movie name");
    }
    const url = `https://www.omdbapi.com/?t=${movieSearch}&apikey=${KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Movie Search failed ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setmovieData({
        Poster: data.Poster,
        Title: data.Title,
        Year: data.Year,
        Director: data.Director,
        Ratings: data.imdbRating,
        Type: data.Type,
        Rated: data.Rated,
        Released: data.Released,
        Runtime: data.Runtime,
        Genre: data.Genre,
        Writers: data.Writer,
        Actors: data.Actors,
        Plot: data.Plot,
        Language: data.Language,
        Country: data.Country,
        Awards: data.Awards,
        BoxOffice: data.BoxOffice,
      });
    } catch (error) {
      console.log(`Error log: ${error}`);
    }
  };

  return (
    <>
      <h1>MovieDekho</h1>
      <div className="search-container">
        <input
          type="text"
          value={movieSearch}
          onChange={(e) => setmovieSearch(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {movieData.Title && (
        <div className="movie-card">
          <img
            src={
              movieData.Poster !== "N/A"
                ? movieData.Poster
                : "https://via.placeholder.com/180x260?text=No+Image"
            }
            alt={movieData.Title}
          />
          <div className="movie-details">
            <p>
              <span>Title:</span> {movieData.Title}
            </p>
            <p>
              <span>Year:</span> {movieData.Year}
            </p>
            <p>
              <span>Director:</span> {movieData.Director}
            </p>
            <p>
              <span>Ratings:</span> {movieData.Ratings}
            </p>
            <p>
              <span>Type:</span> {movieData.Type}
            </p>
          </div>
          <Link to="/movielist" state={{ movieData }}>
            <button style={{ marginTop: "16px" }}>More Info</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Home;
