import "./style.scss";
import { useEffect, useState } from "react";
import Users from "./components/Users";
// import { users } from "./users";
import axios from "axios";

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

  // if data from API....
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };

    // if search bar is empty or search character is greater than 2
    // if (query.length === 0 || query.length > 2) {
    //   console.log(query);
    //   fetchData();
    // }

    fetchData();
  }, [query]);

  console.log(data);

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
        {/* if data from front end */}
        {/* <Users data={search(users)} /> */}

        {/* data from back end */}
        <Users data={search(data)} />
      </div>
    </div>
  );
}

export default App;
