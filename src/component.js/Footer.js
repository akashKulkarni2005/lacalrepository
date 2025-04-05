import React from "react";

export default function Footer(props) {
  return (
    <div class="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => props.reset(props.index)}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-center text-white">
        ₹{props.totalAmount}
      </div>
      <button className="btn btn-success col-2">Pay Now</button>
    </div>
  );
}
