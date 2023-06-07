import React, { useState } from "react";

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const [searchType, setSearchType] = useState("title");

  const handleSearch = () => {
    let searchApi = "";

    if (searchType === "title") {
      searchApi = `http://localhost:9292/books?title=${searchInputText}`;
    } else if (searchType === "author") {
      searchApi = `http://localhost:9292/books?author=${searchInputText}`;
    } else if (searchType === "publisher") {
      searchApi = `http://localhost:9292/books?publisher=${searchInputText}`;
    }

    fetch(searchApi)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  };

  return (
    <form>
        <div className="form-group m-4">
        <div className="row">
        <div className="col">
        <input
            type="text"
            className="form-control"
            placeholder="Search for over 70+ books"
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
        />
        </div>
        <div className="form-group col"> 
        <select
           className="form-control"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
        >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
        </select>
        </div>
        </div>
        <button type="submit" className="m-2 btn btn-primary" onClick={handleSearch}>
            Search
        </button>
      </div>

      {/* Render the books */}
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-2 card m-3 d-flex">
            <img src={book.book_image} alt={book.title} className="card-img-top img-thumbnail " />
            <div className="card-body">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default BookSearch;