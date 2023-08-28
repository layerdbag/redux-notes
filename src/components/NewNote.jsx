import React from 'react'
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = "";
    dispatch(createNote(content));
  };

  dispatch({ type: 'notes/createNote', payload: 'Redux Toolkit is awesome!' })

  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewNote;
