import "./styles.css";
import React, { useState } from "react";
import { BooksData } from "./BooksData";

export default function App() {
  const [bookType, setBookType] = useState([]);
  const changeBookHandler = (book) => {
    setBookType(book);
  };
  return (
    <div className="App">
      <div>
        <h1 className="heading"> Best Books for Learning </h1>
      </div>
      <p className="para"> Learn and Grow </p>
      <div className="btns">
        {Object.keys(BooksData).map((e) => (
          <button
            className="btn_ele"
            onClick={() => changeBookHandler(BooksData[e])}
            key={e}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="books_container">
        <ul>
          {bookType &&
            bookType.map((e) => (
              <li key={e.name}>
                <div className="card">
                  <h3>{e.name}</h3>
                  <div>
                    <h4> {e.rating}</h4>
                  </div>
                  <img src={e.image} alt="image_book" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
