import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => (
  <li onClick={handleClick}>
    {note.content} <strong>{note.important ? "important" : ""}</strong>
  </li>
);

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  });

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleClick={() => dispatch(updateNote(note))}
          />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
