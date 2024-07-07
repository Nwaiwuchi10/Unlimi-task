import React, { useState } from "react";
import "./Table.css";
import TableData from "./TableData";
type DisplayProps = {
  data: any;
};
const TableSection: React.FC<DisplayProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="tb-section">
      <div className="Tb-row">
        <h3>Departmental List</h3>

        <div>
          <TableData displayData={data} />
        </div>
      </div>
    </div>
  );
};

export default TableSection;
