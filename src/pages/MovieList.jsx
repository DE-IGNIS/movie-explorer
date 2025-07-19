import { useLocation, useNavigate } from "react-router-dom";
import "./MovieArticle.css";

function MovieList() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state?.movieData) {
    return (
      <div>
        <p>No movie data found.</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }
  const { movieData } = location.state;

  return (
    <>
      <div>
        <article className="movie-article">
          <header className="movie-header">
            <img
              src={
                movieData.Poster !== "N/A"
                  ? movieData.Poster
                  : "https://via.placeholder.com/220x320?text=No+Image"
              }
              alt={movieData.Title}
              className="movie-poster"
            />
            <div className="movie-meta">
              <h1>
                {movieData.Title} <span>({movieData.Year})</span>
              </h1>
              <p className="movie-genre">{movieData.Genre}</p>
              <p className="movie-rating">
                <span>IMDb:</span> {movieData.Ratings} | <span>Rated:</span>{" "}
                {movieData.Rated} | <span>Runtime:</span> {movieData.Runtime}
              </p>
              <p className="movie-release">
                <span>Released:</span> {movieData.Released}
              </p>
            </div>
          </header>

          <section className="movie-content">
            <h2>Plot</h2>
            <p className="movie-plot">{movieData.Plot}</p>

            <div className="movie-details-grid">
              <div>
                <h3>Director</h3>
                <p>{movieData.Director}</p>
              </div>
              <div>
                <h3>Writers</h3>
                <p>{movieData.Writers}</p>
              </div>
              <div>
                <h3>Actors</h3>
                <p>{movieData.Actors}</p>
              </div>
              <div>
                <h3>Language</h3>
                <p>{movieData.Language}</p>
              </div>
              <div>
                <h3>Country</h3>
                <p>{movieData.Country}</p>
              </div>
              <div>
                <h3>Awards</h3>
                <p>{movieData.Awards}</p>
              </div>
              <div>
                <h3>Box Office</h3>
                <p>{movieData.BoxOffice}</p>
              </div>
              <div>
                <h3>Type</h3>
                <p>{movieData.Type}</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}

export default MovieList;
