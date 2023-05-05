import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onConfirmEdit }) => {
  BookList.propTypes = books;
  BookList.propTypes = onDelete;
  BookList.propTypes = onConfirmEdit;


  const renderedBooks = books.map((book) => {
    const { id } = book;
    return <BookShow book={book} key={id} onDelete={onDelete} onConfirmEdit={onConfirmEdit}/>;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
