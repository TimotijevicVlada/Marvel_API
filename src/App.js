import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Caracters from "./components/Caracters";

function App() {
  const KEY_PUBLIC = "aa18577ca21a283158a61607fe215d2f";

  const [caractersData, setCaractersData] = useState([]);
  const [searchedCaracter, setSearchedCaracter] = useState("");

  const getData = useCallback( async () => {
    try {
      //I have to check if querry is empty or not because the API doesn't work on other way
      if (searchedCaracter) {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${searchedCaracter}&apikey=${KEY_PUBLIC}`);
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
      } else {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${KEY_PUBLIC}`);
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchedCaracter])

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="marvel_img" />
      <SearchInput setSearchedCaracter={setSearchedCaracter}/>
    </div>
  );
}

export default App;
