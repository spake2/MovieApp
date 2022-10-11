import Result from "./components/Result";
import axios from "axios";
import { useEffect, useState } from "react";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=881cbe190d9cfe4a272b3d947857c200&language=en&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=881cbe190d9cfe4a272b3d947857c200&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return ( <div className="bg-[#22254b]">
      <div className="max-w-[1240px] min-h-[400px] mx-auto p-3">
        <input
          type="search"
          value={search}
          onChange={changeTheSearch}
          className="w-full border black rounded text-slate-400 p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <span className="text-3xl flex items-center justify-center my-4 text-slate-400  font-bold">Popular Movies</span>
        {movies.length === 0 ? (
          <div className="text-3xl text-center mt-2 text-slate-400">Loading...</div>
        ) : (
          <Result movies={movies} />
        )}
      </div>
    </div>
  );
}

export default App;
