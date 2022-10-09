import { Users } from "./users.js";

import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.get("/", (req, res) => {
  // geting search query
  const { q } = req.query;
  //   console.log(q);

  // search on keys
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(q))
    );
  };

  // sending all the records
  res.json(search(Users));

  // sending only 10 data
  //   res.json(search(Users).splice(0, 10));
});

app.listen(5000, () => {
  console.log("Connected!!!");
});
