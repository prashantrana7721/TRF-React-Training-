import React from "react";

const Dates = (props) => {
  const month = props.date.toLocaleString("en-us", {
    month: "short",
  });

  const year = props.date.getFullYear();

  const day = props.date.getDate();

  return (
    <div className="trf-date">
      <div className="trf-date_month">
        {day}-{month}-{year}
      </div>

      {/* <div className="trf-date_year">{year}</div>

      <div className="trf-date_day">{day}</div> */}
    </div>
  );
};

export default Dates;
