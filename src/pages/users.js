import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = ({ users }) => {
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.data;

  //   setUsers(data);
  // };

  // console.log(users); 

  // useEffect(() => {
  //   getUsers();
  // }, []);

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

export async function getStaticProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  }
}

export default Users;