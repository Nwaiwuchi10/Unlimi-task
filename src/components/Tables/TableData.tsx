import * as React from "react";
import Table from "react-bootstrap/Table";
import "./TableData.css";

type DisplayProps = {
  displayData: any;
};
const TableData: React.FC<DisplayProps> = ({ displayData }) => {
  console.log(displayData);
  const [Numbers, setNumbers] = React.useState<any>([]);
  React.useEffect(() => {
    setNumbers(
      Array.from({ length: displayData?.length || 0 }, (_, index) => index + 1)
    );
  }, [displayData]);
  return (
    <div>
      <div className="mt-5">
        <Table responsive striped bordered>
          <thead className="box-table-row">
            <tr>
              {" "}
              <th>
                <input type="checkbox" />
              </th>
              <th>S/N</th>
              <th>Image</th>
              <th>SKU</th>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Cost Price</th>
              <th>Quantity</th>
              <th>Size</th>
            </tr>
          </thead>
          {displayData.length > 0 ? (
            <>
              <tbody>
                {displayData?.slice(0, 10)?.map((item: any, index: any) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{Numbers[index]}</td>
                    <td>
                      <div className="img-div">
                        {" "}
                        <img src={item?.Image_1} alt="" />
                      </div>
                    </td>
                    <td>{item?.SKU} </td>
                    <td>{item?.Name} </td>
                    <td>{item?.Title} </td>
                    <td>{item?.Description} </td>
                    <td>{item?.Brand} </td>
                    <td>{item?.Cost_Price} </td>
                    <td>{item?.Quantity} </td>
                    <td>{item?.size} </td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <>
              <tbody>
                <tr>
                  <td
                    colSpan={11}
                    style={{ textAlign: "center", color: "red" }}
                  >
                    PLease use the search box to search on a supplier in other
                    to fetch data
                  </td>
                </tr>
              </tbody>
            </>
          )}
        </Table>
      </div>
    </div>
  );
};
export default TableData;
