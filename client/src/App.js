import "./style.scss";
import { useState } from "react";
import Users from "./components/Users";
import { users } from "./users";

function App() {
  const [query, setQuery] = useState("");

  // if search is based on a specific field
  // const search = (data) => {
  //   return data.filter((user) => user.first_name.toLowerCase().includes(query));
  // };

  // if search is based on multiple fields
  // const search = (data) => {
  //   return data.filter(
  //     (user) =>
  //       user.first_name.toLowerCase().includes(query) ||
  //       user.last_name.toLowerCase().includes(query) ||
  //       user.email.toLowerCase().includes(query)
  //   );
  // };

  // both are same.
  // console.log(users[0].first_name);
  // console.log(users[0]["first_name"]);

  // best way of doing for multiple search key.....
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Users data={search(users)} />
      </div>
    </div>
  );
}

export default App;
