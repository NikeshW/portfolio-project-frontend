import { useState, useEffect } from "react";
import axios from "axios";
import Item from './Item'



const API = process.env.REACT_APP_API_URL;

function Items() {
  const [items, setItems] = useState([])



  useEffect(() => {
    axios.get(`${API}/items`)
    .then((response) => {
      setItems(response.data)
    })
    .catch((c) => console.warn("catch",c ))
  },[])
  return (
  <div className="Items">
   {items.map((item) => {
    return <Item key={item.id} item={item}/>
   })}
  </div>
  );
}

export default Items;
