// import React, { useState } from 'react'

// export default function Textform(props) {
//     const [text,settext]=useState("enter the text here");
//     const data=()=>{
//         let newText=text.toUpperCase();
//         settext(newText);
        
//     }

//   return (
//     <div>
//         <form>
//   <fieldset disabled="">
//     <legend>Pls enter the content</legend>
//     <div className="mb-3">
//       <label htmlFor="disabledTextInput" className="form-label">
//         Disabled input
//       </label>
//       <input
//         type="text"
//         id="disabledTextInput"
//         value={text}
//         onChange={(e)=>settext(e.target.value)}
//         className="form-control"
//         placeholder="Disabled input"
//       />
//     </div>
//     <button
//             type="button"
//             className="btn btn-danger"
//             onClick={data}
//           >convert
//           </button>
    
//   </fieldset>
// </form>

        
      
//     </div>
//   )
// }
import React, { useState } from 'react';

export default function Textform() {
  const [text, setText] = useState("enter the text here");

  const convertToUppercase = () => {
    let newText=text.toUpperCase();
    setText(newText);
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>Pls enter the content</legend>
          <div className="mb-3">
            <label htmlFor="textInput" className="form-label">
              Enter text:
            </label>
            <input
              type="text"
              id="textInput"
              className="form-control"
              value={text} // Bind value to text state
              onChange={(e) => setText(e.target.value)}// Update text state on input change
            />
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={data}
          >
            Convert
          </button>
        </fieldset>
      </form>
    </div>
  );
}
