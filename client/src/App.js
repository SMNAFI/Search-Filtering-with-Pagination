import "./style.scss";
import { useEffect, useState } from "react";
import Users from "./components/Users";
// import { users } from "./users";
import axios from "axios";
import Loading from "./components/Loading";
// import Pagination from "./components/Pagination";
import PaginationMUI from "./components/PaginationMUI";

function App() {
  const [query, setQuery] = useState("");

  // if search is based on a specific field (local data)
  // const search = (data) => {
  //   return data.filter((user) => user.first_name.toLowerCase().includes(query));
  // };

  // console.log(users[0].first_name);
  // console.log(users[0]["first_name"]);
  // both are the way to access property.

  // search based on multiple key..... (local data)
  // const keys = ["first_name", "last_name", "email"];
  // const search = (data) => {
  //   return data.filter((user) =>
  //     keys.some((key) => user[key].toLowerCase().includes(query))
  //   );
  // };

  // if data from API....
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const datePerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  // get current data
  const indexOfLastData = currentPage * datePerPage;
  const indexOfFirstData = indexOfLastData - datePerPage;
  // console.log(indexOfFirstData, indexOfLastData);
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {/* <Users data={currentData} /> */}

        {/* data from back end */}
        {isLoading ? (
          <Loading>Loading.....</Loading>
        ) : (
          <Users data={currentData} />
        )}

        <div className="pagination">
          <PaginationMUI
            dataPerPage={datePerPage}
            totalData={data.length}
            paginate={paginate}
          />
        </div>

        {/* custom pagination component. need to fixed. */}
        {/* <div>
          <Pagination
            dataPerPage={datePerPage}
            totalData={data.length}
            paginate={paginate}
          />
        </div> */}
      </div>
    </div>
  );
}

export default App;
