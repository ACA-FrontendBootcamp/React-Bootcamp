import React, { useEffect, useState } from "react";
import { API_URL } from "../src/constants/api";
import DivisionContainer from "./components/divisionContainer";
import Pagination from "./components/pagination";
import InfoSection from "./components/infoSection";

function App() {
  const loadCountPerPage = 3;
  const [offset, setPageOffset] = useState(0);
  const [filterKey, setFilterKey] = useState("");
  const [data, setData] = useState({
    info: {},
    records: [],
  });

  //   const handleLoadMore = () => {
  //     console.log(offset);
  //     setPageOffset(loadCountPerPage + offset);
  //   };

  const handlePageClick = (page) => {
    setPageOffset(loadCountPerPage + (page - 1));
  };

  useEffect(() => {
    fetch(`${API_URL}?load_amount=${100}&offset=${offset}`).then((res) =>
      res.json()
    );
  }, [filterKey]);

  useEffect(() => {
    fetch(`${API_URL}?load_amount=${loadCountPerPage}&offset=${offset}`)
      .then((res) => res.json())
      //  part of load more/ add

      // .then(res => setData(prev => ({
      // 		records : [...prev.records, ...res.records],
      // 		info : {...prev.info, ...res.info},
      // })))
      .then((res) => setData(res));
  }, [offset]);
  return (
    <div>
      <h1>Harvard Museum </h1>
      <div className="content">
        <section className="info">
          <InfoSection info={data.info} />
        </section>
        <section className="divisions">
          {data.records && <DivisionContainer records={data.records} />}
          {/* <button onClick={handleLoadMore}>LOAD MORE</button>  */}
          <Pagination
            totalPages={data.info.pages}
            handlePageClick={handlePageClick}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
