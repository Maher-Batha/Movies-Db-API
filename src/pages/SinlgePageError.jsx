import React from "react";
import { useRouteError } from "react-router-dom";

const SinlgePageError = () => {
  const error = useRouteError();
  return (
    <section>
      <div className="container">
        <h1>{error.message}</h1>
      </div>
    </section>
  );
};

export default SinlgePageError;
