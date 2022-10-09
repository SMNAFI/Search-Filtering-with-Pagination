import React from "react";

const Users = ({ data }) => {
  return (
    <table className="table table-hover my-4">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      {data.map((user) => (
        <tbody key={user.id}>
          <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Users;
