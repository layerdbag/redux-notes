import React from 'react'
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = async e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = "";
    dispatch(createNote(content));
  };

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
