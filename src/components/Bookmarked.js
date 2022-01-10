import React from "react";

const Bookmarked = ({ bookmark, setBookmark }) => {
  const handleDelete = (caracter) => {
    const deleted = bookmark.filter((item) => item.id !== caracter.id);
    setBookmark(deleted);
  };

  return (
    <div className="bookmarked">
      <h1>Bookmarked</h1>
      {bookmark.length < 1 ? (
        <h2 className="no_bookmarked">There is no bookmarked yet!</h2>
      ) : (
        <div className="bookmarked_wrapper">
          {bookmark.map((item) => (
            <div key={item.id} className="caracter">
              <div className="picture">
                <img
                  src={item.thumbnail.path + "/portrait_incredible.jpg"}
                  alt={item.name}
                />
              </div>
              <div className="name">
                <h4>{item.name}</h4>
                <button onClick={() => handleDelete(item)} className="delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarked;
