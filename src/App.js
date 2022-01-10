import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Caracters from "./components/Caracters";
import Bookmarked from "./components/Bookmarked";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const KEY_PUBLIC = "aa18577ca21a283158a61607fe215d2f";

  const [caractersData, setCaractersData] = useState([]);
  const [searchedCaracter, setSearchedCaracter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bookmark, setBookmark] = useState([]);

  const getData = useCallback(async () => {
    try {
      //I have to check if querry is empty or not because the API doesn't work on other way
      if (searchedCaracter) {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchedCaracter}&apikey=${KEY_PUBLIC}`
        );
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
        setIsLoading(false);
      } else {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?&apikey=${KEY_PUBLIC}`
        );
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchedCaracter]);

  useEffect(() => {
    getData();
  }, [getData]);

  //Function that get bookmarked marvel from storage
  const getMarvel = () => {
    if (localStorage.getItem("marvel") === null) {
      localStorage.setItem("marvel", JSON.stringify([]));
    } else {
      const marvel = JSON.parse(localStorage.getItem("marvel"));
      setBookmark(marvel);
    }
  };
  useEffect(() => {
    getMarvel();
  }, []);

  //Function that save bookmarked marvel to local storage
  const setMarvel = useCallback(() => {
    localStorage.setItem("marvel", JSON.stringify(bookmark));
  }, [bookmark]);

  useEffect(() => {
    setMarvel();
  }, [setMarvel]);

  return (
    <Router>
      <div className="App">
        <Navbar bookmark={bookmark} />
        <Routes>
          <Route
            path="/"
            element={
              <Caracters
                caractersData={caractersData}
                bookmark={bookmark}
                setBookmark={setBookmark}
                setSearchedCaracter={setSearchedCaracter}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Bookmarked bookmark={bookmark} setBookmark={setBookmark} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
