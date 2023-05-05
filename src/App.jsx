import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }];

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
      <BookList books={books} onDelete={deleteBookById} onConfirmEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
