import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("Fetching users..."); // ✅ Check if it's called twice

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users. Make sure you are logged in.');
        console.error(err);
      }
    };

    fetchUsers();
  }, []); // ✅ Only runs once, unless StrictMode triggers double invocation in dev

  return (
    <div className="container mt-5">
      <h2>All Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-bordered table-striped mt-4">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user._id || user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
