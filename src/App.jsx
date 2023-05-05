import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(() => response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(() => updatedBooks);
  };

  const deleteBookById = (id) => {
    const filteredBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(() => filteredBooks);
  };

  const editBookById = (id, newTitle) => {
    const edittedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(() => edittedBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onConfirmEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
