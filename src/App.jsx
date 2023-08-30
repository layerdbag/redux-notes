import React, { useEffect } from 'react'
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux';
import { initializeNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <div>
      <Notes />
      <VisibilityFilter />
      <NewNote />
    </div>
  );
};

export default App;
