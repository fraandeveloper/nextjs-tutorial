import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;

    setUsers(data);
  };

  console.log(users); 

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }
    </div>
  );
}

export default Users;