import logo from './logo.svg';
import './App.css';
import TextForm from './Component.js/Textform'
import React from 'react'
import Navbar from './Component.js/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Textform />
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Textform from './Component.js/Textform';
// import Navbar from './Component.js/Navbar';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Textform />
//     </div>
//   );
// }

// export default App;
