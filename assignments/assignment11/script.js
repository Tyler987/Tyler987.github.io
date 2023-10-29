//gets the stuff from the json
        const getMovies = async () => {
          const url = "https://portiaportia.github.io/json/movies.json";

          try {
            const response = await fetch(url);
            return await response.json();
          } catch (error) {
            console.log(error);
          }
        };

//creates all the elements
const createMovieItem = (movie) => {
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");

  const image = document.createElement("img");
  image.src = "https://portiaportia.github.io/json/" + movie.img; //for hovering the size
  image.classList.add("movie");

  const movieDetails = document.createElement("div");
  movieDetails.classList.add("movie-details");

  const title = document.createElement("h2");
  title.textContent = movie.title;
  movieDetails.appendChild(title);

  const director = document.createElement("p");
  director.textContent = "Director: " + movie.director;
  movieDetails.appendChild(director);

  const actors = document.createElement("p");
  actors.textContent = "Actors: " + movie.actors.join(", ");
  movieDetails.appendChild(actors);

  const year = document.createElement("p");
  year.textContent = "Year: " + movie.year;
  movieDetails.appendChild(year);

  const genres = document.createElement("p");
  genres.textContent = "Genres: " + movie.genres.join(", ");
  movieDetails.appendChild(genres);

  const description = document.createElement("p");
  description.textContent = "Description: " + movie.description;
  movieDetails.appendChild(description);

  movieContainer.appendChild(image);
  movieContainer.appendChild(movieDetails);

  return movieContainer;
};

//shows the movies
          const showMovies = async () => {
          let movies = await getMovies();
          let moviesSection = document.getElementById("movies-section");

          movies.forEach((movie) => {
            const movieItem = createMovieItem(movie);
            moviesSection.appendChild(movieItem);
          });
        };

//shows the movies
        showMovies();