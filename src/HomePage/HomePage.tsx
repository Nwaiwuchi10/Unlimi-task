import React, { useState } from "react";
import "./Home.css";
import NavBar from "../components/Navbar/NavBar";
import TableSection from "../components/Tables/TableSection";
const Home = () => {
  const [searchData, setSearchData] = useState<any>([]);
  console.log(searchData);
  return (
    <div className="homePage-section">
      <NavBar onSearch={setSearchData} />
      <TableSection data={searchData} />
    </div>
  );
};

export default Home;
