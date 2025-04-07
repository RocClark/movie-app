import React from "react";

const Answer = ({ answer }) => {
  return <h2>{answer ? answer : "Ask a question!"}</h2>;
};

export default Answer;
