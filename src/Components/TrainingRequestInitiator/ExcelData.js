import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./TrainingRequestInitiator.css";

export default function ExcelData({ rows }) {
  const tableRows = rows.map((row, index) => (
    <tr key={index}>
      {row.map((column, i) => (
        <td key={i}>{column}</td>
      ))}
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            {rows[0].map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
