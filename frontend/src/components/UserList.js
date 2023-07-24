// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fungsi untuk mendapatkan data user dari backend
    const fetchUsers = async () => {
      try {
        
        const response = await axios.get('http://localhost:4000/users');
        document.writeln(response.data)
        setUsers(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsers();
  }, []);

  
  return (
    <div>
      
      <h2>Daftar Pengguna</h2>
      
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Nama: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Tambahkan data lain yang ingin Anda tampilkan */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
