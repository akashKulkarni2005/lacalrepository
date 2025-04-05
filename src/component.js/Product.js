// import React from "react";

// export default function Product(props) {

//   return (
//     <div className="row" mt-5>
//       <div className="col-5">
//         <h2>
//           {props.product.name}
//           <span class="badge text-bg-secondary">₹{props.product.price}</span>
//         </h2>
//       </div>
//       <div className="col-3">
//         <div
//           class="btn-group"
//           role="group"
//           aria-label="Basic mixed styles example"
//         >
//           <button type="button" class="btn btn-danger">
//             -
//           </button>
//           <button type="button" class="btn btn-warning">
//              {props.product.quantity}
//           </button>
//           <button type="button" class="btn btn-success"  onClick={() => props.increment(props.index)}>
//             +
//           </button>
//         </div>
//       </div>
//       <div className='col-4'>
//       {props.product.quantity * props.product.price}
//     </div>
//     </div>
//   );
// }
import React from "react";

export default function Product(props) {
  return (
    
   
    
    <div className="row mt-5">
      
      <div className="col-4">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary">
            ₹{props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.decrement(props.index)}
          >
            -
          </button>

          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.increment(props.index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
            type="button"
            className="btn btn-primary col-2"
            onClick={() => props.remove(props.index)}
          >
            Remove
          </button>
          
          
          

        
     
          
          


          
    </div>
    
    
    
  );
}
