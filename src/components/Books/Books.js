/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import { React, useEffect, useState } from "react";
import {Button} from "../Button/Button"
// eslint-disable-next-line no-unused-vars
const mockBook = [
  {
    name: "React book",
    price: 250,
    description: "ReactJS Book is the best",
  },
  {
    name: "Angular book",
    price: 120,
    description: "Angular Book is the best",
  },
  {
    name: "Vue book",
    price: 230,
    description: "Vue Book is the best",
  },
];

const Books = () => {
  const [dataBook, setDataBook] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setDataBook(mockBook);
    setData({name : 'Oreo'})
    fetch("http://localhost:3001/api/get-books")
    .then(res => res.json())
    .then(
      (result) => {
       console.log('====================================');
       console.log(result);
       console.log('====================================');
       setDataBook(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       console.log('====================================');
       console.log(error + "");
       console.log('====================================');
      }
    )
  }, []);

  console.log('====================================');
  console.log(dataBook);
  console.log('====================================');

  if(dataBook != null){
      dataBook.map(x => console.log(x))
  }

  return (
    <div>
      <p>Home</p>
       {
           dataBook != null && dataBook.map((x =><p>{x.name} : {x.price} =>> {x.description}</p>))
       }
       {
           data != null && <p>Hi {data.name}</p>
       }
       <Button data={"Submit"}/>
       <Button data={"Close"} />
    </div>
  );
};

export default Books;
