import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// // src/App.js
// import React from 'react';
// import UserList from './components/UserList';

// function App() {
//   return (
//     <div>
//       <UserList />
//     </div>
//   );
// }

// export default App;



// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserList from "./components/UserList";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UserList/>}/>
//         <Route path="add" element={<AddUser/>}/>
//         <Route path="edit/:id" element={<EditUser/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
