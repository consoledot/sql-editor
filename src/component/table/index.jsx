import "./index.scss";
import { CsvToHtmlTable } from "react-csv-to-table";
import customer from "../../data/customer";
const Table = () => {
  return (
    <div
      style={{
        overflow: "scroll",
        width: "100vw",
        height: "50vh",
      }}
    >
      <CsvToHtmlTable
        data={customer}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    </div>
  );
};

export default Table;
