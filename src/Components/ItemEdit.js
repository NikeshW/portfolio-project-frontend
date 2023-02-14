import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ItemEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [item, setItem] = useState({
    item_name: "",
    pick_up_instructions: "",
    picture: "",
  });

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

  const updateItem = (updatedItem) => {
    console.log(updatedItem);
    axios
      .put(`${API}/items/${id}`, updatedItem)
      .then(
        () => {
          navigate(`/items/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/items/${id}`).then(
      (response) => setItem(response.data),
      (error) => navigate(`Item-not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateItem(item, id);
  };

  return (
    <div>
      <div className="edit">
        <img className="item-edit-img" src={item.picture} alt="pic" />
        <div className="item-edit-form">
        <form  className="form" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name: </label>
          <input
            id="item_name"
            value={item.item_name}
            type="text"
            placeholder="Name of the item"
            required
            onChange={handleTextChange}
          />
          <label htmlFor="pick_up_instructions">Pick Up Instructions: </label>
          <input
            id="pick_up_instructions"
            value={item.pick_up_instructions}
            type="text"
            placeholder="Pick up instructions"
            required
            onChange={handleTextChange}
          />
          <label htmlFor="picture">Post Picture: </label>
          <input className="file"
            id="picture"
            type="file"
            name="picture"
            accept=".png, .jpg, .jpeg"
            placeholder="Post Picture"
            onChange={onChange}
            
          />
          <div>
             <input type="submit" />
          </div>
         
        </form>
        </div>
      </div>
      <div >
        <Link to={`/items/${id}`}>
          <button className="edit-form-back-button">Go back to items!</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemEdit;
