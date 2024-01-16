import ReactLoading from "react-loading";
import React from "react";
const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading
        type="spinningBubbles"
        color="#007bff"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
