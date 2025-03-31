// components/ResultTable.js
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const ResultTable = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Load CSV from public folder
    Papa.parse("data/gene_info0.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setResults(result.data);
      },
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover bg-white">
        <thead className="table-success">
          <tr>
            <th>No.</th>
            <th>Locus</th>
            <th>Others Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>
                <a href={row.link} className="text-decoration-underline text-primary">
                  {row.agi_code}
                </a>
              </td>
              <td>{row.other_name}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
