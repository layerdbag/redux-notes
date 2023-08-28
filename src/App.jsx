import React from 'react'
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <Notes />
      <NewNote />
    </div>
  );
};

export default App;

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1
//   }
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2
//   }
// });
