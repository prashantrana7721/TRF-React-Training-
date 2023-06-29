import React from "react";

const Dates = (props) => {
  const date = new Date(props.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return <span>{formattedDate}</span>;
};

export default Dates;
