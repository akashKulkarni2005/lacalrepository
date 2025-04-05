// import Navbar from './component.js/navbar';
// import ProductList from './component.js/ProductList';
// import './App.css';
// import logo from './logo.svg';
// import React, { useState } from 'react';

// function App() {
//   const productList = [
//     {
//       price: 9999,
//       name: "iphone",
//       quantity: 0,
//     },
//     {
//       price: 9999,
//       name: "nothing",
//       quantity: 0,
//     }
//   ];

//   let [productList1, setProductList]=useState(productList)

//   const increment=(index)=>
//   {
//     let newProductList=[...productList1];
//     newProductList[index].quantity+=1;
//     setProductList(newProductList);
//   }
//   return (
//     <>
//       <Navbar />
//       <main classsName="container mt-10">
//       <ProductList productList1={productList1} increment={increment}/>
//       </main>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navbar from "./component.js/navbar";
import ProductList from "./component.js/ProductList";
import "./App.css";
import logo from "./logo.svg";
import Footer from "./component.js/Footer";
import AddItem from "./component.js/AddItem";

function App() {
  const initialProductList = [
    {
      price: 9999,
      name: "iphone",
      quantity: 0,
    },

    { price: 9999, 
      name: "nothing", 
      quantity: 0 },
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, settotalAmount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = (index) => {
    const newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity += 1;
    newtotalAmount += newProductList[index].price;
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };

  const decrement = (index) => {
    const newProductList = [...productList];
    let newtotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= productList[index].price;
    }

    settotalAmount(newtotalAmount);

    setProductList(newProductList);
  };

  const reset = () => {
    const newProductList = [...productList];
    newProductList.map((initialProductList) => {
      initialProductList.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };
  // const removeQuantity=(index)=>{
  //   const newProductList=[...ProductList];

  //   newProductList.filter((product)=>product.index!=index);
  //   setProductList(newProductList);
  //   };
  // const remove = (name) => {
  //   const newProductList = productList.filter(
  //     (product) => product.name !== name
  //   );

  //   setProductList(newProductList);
  // };
  const remove = (index) => {
    const newProductList = [...productList];
    if (newProductList.length === 0) {
      setMessage("All items are not available");
    }
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };
  const Add = (name, price) => {
    const newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });

    setProductList(newProductList);
  };

  // const getTotalItemsSelected = () => productList.reduce((total, product) => total + product.quantity, 0);
  const totalItems = () => {
    const newProductList = [...productList];
    let finalNoItems= productList.reduce((t, product) => t + product.quantity, 0);
    return finalNoItems;
  };

  return (
    <>
      <Navbar totalItems={totalItems()} />
      <main className="container mt-10">
        <AddItem Add={Add} />
        <ProductList
          productList={productList}
          increment={increment}
          decrement={decrement}
          remove={remove}
          totalItems={totalItems}
        />
      </main>
      <Footer totalAmount={totalAmount}
       reset={reset} />
    </>
  );
}

export default App;
