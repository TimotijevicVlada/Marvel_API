import SearchInput from "./SearchInput";

const Caracters = ({
  caractersData,
  bookmark,
  setBookmark,
  setSearchedCaracter,
  isLoading
}) => {
  const handleBookmark = (item) => {
    const exist = bookmark.find(elem => elem.id === item.id);
    if(exist) {
        alert("This caracter is already bookmarked!");
    } else {
        setBookmark([...bookmark, item]);
    }
  };

  return (
    <div className="caracters">
      <SearchInput setSearchedCaracter={setSearchedCaracter} />
      <div className="caracters_wrapper">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          caractersData.map((item) => (
            <div key={item.id} className="caracter">
              <div className="picture">
                <img
                  src={item.thumbnail.path + "/portrait_incredible.jpg"}
                  alt={item.name}
                />
              </div>
              <div className="name">
                <h4>{item.name}</h4>
                <button
                  onClick={() => handleBookmark(item)}
                  className="bookmark"
                >
                  Bookmark
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Caracters;
