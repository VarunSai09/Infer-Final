import React from "react";
function Inputs() {
  return (
    <div className="row">
      <form action="">
        <div className="row">
          <input type="text" id="email" className="email" placeholder="Email" />
        </div>
        <div className="row">
          <input
            type="password"
            id="password"
            className="password"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
}
export default Inputs;
