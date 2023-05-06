import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  BookShow.propTypes = Object;

  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext()

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(() => !showEdit);
  };

  const handleSubmit = ( ) => {
    setShowEdit(() => !showEdit);
  };

  let content = () => {
    return showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title;
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}300/200`} />
      <div>{content()}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default BookShow;
