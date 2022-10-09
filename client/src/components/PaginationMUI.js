import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationMUI = ({ dataPerPage, totalData, paginate }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    paginate(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="secondary"
        size="large"
        count={Math.ceil(totalData / dataPerPage)}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationMUI;
