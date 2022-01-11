import { useState } from "react";
import SearchInput from "./SearchInput";
import ReactPaginate from "react-paginate";

const Caracters = ({
  caractersData,
  bookmark,
  setBookmark,
  setSearchedCaracter,
  isLoading,
}) => {

  //Function that add items to the bookmarked page
  const handleBookmark = (item) => {
    const exist = bookmark.find((elem) => elem.id === item.id);
    if (exist) {
      alert("This caracter is already bookmarked!");
    } else {
      setBookmark([...bookmark, item]);
    }
  };

  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 8;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = caractersData.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const pageCount = Math.ceil(caractersData.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="caracters">
      <SearchInput setSearchedCaracter={setSearchedCaracter} />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="caracters_wrapper">
          {displayItems.map((item) => (
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
          ))}
        </div>
      )}
      {!isLoading && (
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationContainer"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </div>
  );
};

export default Caracters;
