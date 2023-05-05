import BookShow from "./BookShow";

const BookList = ({ books }) => {
  BookList.propTypes = books;

  const renderedBooks = books.map((book) => {
    const { id } = book;
    return <BookShow book={book} key={id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
