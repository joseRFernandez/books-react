import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    const { id } = book;
    return <BookShow book={book} key={id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
