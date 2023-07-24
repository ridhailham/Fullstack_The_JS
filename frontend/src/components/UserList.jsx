import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;








// // src/UserList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fungsi untuk mendapatkan data user dari backend
//     const fetchUsers = async () => {
//       try {
        
//         const response = await axios.get('http://localhost:4000/users');
//         document.writeln(response.data)
//         setUsers(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchUsers();
//   }, []);

  
//   return (
//     <div>
      
//       <h2>Daftar Pengguna</h2>
      
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <p>Nama: {user.name}</p>
//             <p>Email: {user.email}</p>
//             {/* Tambahkan data lain yang ingin Anda tampilkan */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
