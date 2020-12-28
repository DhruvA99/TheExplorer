import React from "react";
import classes from "./Table.module.css";

const table = (props) => {
  const TableContent = [];

  //open in new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  props.mainData.map((item) => {
    item.map((data, index) => {
      return TableContent.push(
        <tr key={data.id}>
          <td>{index + 1}</td>
          <td>
            <button
              className={classes.Link}
              onClick={() => {
                openInNewTab(data.link);
              }}
            >
              {data.name}
            </button>
          </td>
          <td>{data.id}</td>
          <td>{data.isHazardeous.toString()}</td>
          <td>{data.close_approach_date}</td>
          <td>{data.closest_approach_distance}</td>
          <td>{data.estimated_dia_min}</td>
          <td>{data.estimated_dia_max}</td>
        </tr>
      );
    });
  });
  let Header = props.Header.map((item) => {
    return <th key={item}>{item}</th>;
  });
  return (
    <div className={classes.mainTable}>
      <h1>Asteroid Data</h1>
      <table>
        <tbody>
          <tr>{Header}</tr>
          {TableContent}
        </tbody>
      </table>
    </div>
  );
};

export default table;
