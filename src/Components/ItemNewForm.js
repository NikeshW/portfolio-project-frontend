import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ItemNewForm() {
  let navigate = useNavigate();

  const addItem = (newItem) => {
    axios
      .post(`${API}/items`, newItem)
      .then(
        () => {
          navigate(`/items`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [item, setItem] = useState({
    item_name: "",
    pick_up_instructions: "",
    picture: "",
  });

  const handelTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const onChange = (e) => {
    async function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }

    fileToBase64(e.target.files[0]).then((uri) => {
      setItem({ ...item, picture: uri });
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(item);
  };


  return (
    <div>
    <div className="new">
      <img className="item-new-img"src={item.picture} alt="add-pic" />
     
      <form className="item-new-form" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Name: </label>
        <input
          id="item_name"
          value={item.item_name}
          type="text"
          name="item_name"
          placeholder="Item Name"
          required
          onChange={handelTextChange}
        />

        <label htmlFor="pick_up_instructions">Pick-up instructions:</label>
        <input
          id="pick_up_instructions"
          value={item.pick_up_instructions}
          type="text"
          name="pick_up_instructions"
          placeholder="Pick-up instructions"
          required
          onChange={handelTextChange}
        />

        <input
          id="picture"
          type="file"
          name="picture"
          accept=".png, .jpg, .jpeg"
          placeholder="Post Picture"
          onChange={onChange}
          required
        />
        <input type="submit" />
      </form>
     
    </div>
       <div >
       <Link to={`/items/`}>
         <button className="edit-form-back-button">Go back to items!</button>
       </Link>
     </div>
     </div>
  );
}

export default ItemNewForm;
