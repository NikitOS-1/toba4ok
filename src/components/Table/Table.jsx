import "./Table.css";
import { useState } from "react";
import Paginations from "./Pagination/Paginations";
import Item from "./Item/Item";
import HeaderItem from "./Item/HeaderItem";

const Table = ({ data }) => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <HeaderItem />
        </thead>
        <tbody>
          {data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((i) => (
              <Item item={i} key={i.id} />
            ))}
        </tbody>
      </table>
      <Paginations
        totalPages={totalPages}
        page={page}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};
export default Table;
