import React from "react";

const NotFound = props => {
  console.log(props);
  return (
    <section className="not-found">
      <div className="not-found-center">
        <div className="not-found-container">
          <h1>404</h1>
          <h2>page not found</h2>
          <h3>
            The requested URL
            <span className="not-found-url">
              {props.history.location.pathname}
            </span>
            was not found
          </h3>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
