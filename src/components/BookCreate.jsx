import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  BookCreate.propTypes = onCreate;
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle(() => "");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};
export default BookCreate;
