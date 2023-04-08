import React, { useState } from "react";
import "../App.css";

function TableComponent() {
  const [tableData, setTableData] = useState([
    { id: 1, task: "Onboarding Call", status: "" },
    { id: 2, task: "Google Search Console Access", status: "" },
    { id: 3, task: "Google Analytics Access", status: "" },
    { id: 4, task: "Website Access", status: "" },
    { id: 5, task: "Technical Audit", status: "" },
    { id: 6, task: "Anchor Text and Semantic Analysis", status: "" },
    { id: 7, task: "Competitor Analysis", status: "" },
    { id: 8, task: "Anchor Text / URL Mapping", status: "" },
    {
      id: 9,
      task: "Google Data Studio Report + Local Reporting Suite",
      status: "",
    },
    { id: 10, task: "Site Level Optimization", status: "" },
    { id: 11, task: "On Page Optimization", status: "" },
    { id: 12, task: "Content Creation", status: "" },
    { id: 13, task: "Content Publishing", status: "" },
    { id: 14, task: "Premium Press Release", status: "" },
    { id: 15, task: "Authority Niche Placements", status: "" },
    { id: 16, task: "Review Management", status: "" },
    { id: 17, task: "Index Links", status: "" },
    { id: 18, task: "Video Recap", status: "" },
  ]);

  function handleDataChange(id, field, value) {
    setTableData((prevTableData) =>
      prevTableData.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  }

  function handleKeyDown(event, id, month) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const value = event.target.innerText.trim();
      if (value !== "") {
        handleDataChange(id, month, value);
        if (month === "month5" && id === tableData[tableData.length - 1].id) {
          // Add a new row if enter is pressed in the last column
          setTableData((prevTableData) => [
            ...prevTableData,
            { id: prevTableData.length + 1, task: "", status: "" },
          ]);
        }
      }
      event.target.innerText = "";
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.task}</td>
            {[...Array(5)].map((_, i) => (
              <td
                key={i}
                contentEditable={true}
                onBlur={(event) =>
                  handleDataChange(row.id, "status", event.target.innerText)
                }
                onKeyDown={(event) => handleKeyDown(event, row.id)}
              >
                {row.status}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
