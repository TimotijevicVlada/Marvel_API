import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Caracters from "./components/Caracters";
import Footer from "./components/Footer";

function App() {
  const KEY_PUBLIC = "aa18577ca21a283158a61607fe215d2f";

  const [caractersData, setCaractersData] = useState([]);
  const [searchedCaracter, setSearchedCaracter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback( async () => {
    try {
      //I have to check if querry is empty or not because the API doesn't work on other way
      if (searchedCaracter) {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${searchedCaracter}&apikey=${KEY_PUBLIC}`);
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
        setIsLoading(false);
      } else {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${KEY_PUBLIC}`);
        console.log(response.data.data.results);
        setCaractersData(response.data.data.results);
        setIsLoading(false);
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
      <SearchInput setSearchedCaracter={setSearchedCaracter}/>
      {isLoading ? <div className="loading">Loading...</div> : <Caracters caractersData={caractersData}/>}
      <Footer />
    </div>
  );
}

export default App;
