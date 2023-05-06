import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    const { id } = book;
    return <BookShow book={book} key={id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
