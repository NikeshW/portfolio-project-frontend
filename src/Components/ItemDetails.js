import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import Claims from "./Claims";

const API = process.env.REACT_APP_API_URL;

function ItemDetails() {
  const [item, setItem] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  const deleteItem = () => {
    axios
      .delete(`${API}/items/${id}`)
      .then(
        () => {
          navigate(`/items`);
        },
        (error) => console.log(error(error))
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteItem();
  };
  useEffect(() => {
    axios
      .get(`${API}/items/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);
  return (
    <div className="item-details">
      {/* <div className='item-details-img'> */}
      <img className="item-details-img" src={item.picture} alt="no" />

      <div className="item-details-card">
        <h3>Item Name: {item.item_name}</h3>
        <p>Pick-up instructions: {item.pick_up_instructions}</p>
        <p>Posted on: {dateFormat(item.posted_date, "longDate")}</p>
        <div className="edit-form-buttons">
          <Link to={`/items`}>
            <button className="back-button">back</button>
          </Link>

          <Link to={`/items/${item.id}/edit`}>
            <button className="edit-button">edit</button>
          </Link>

          <button className="delete-button" onClick={handleDelete}>
            delete
          </button>
        </div>
        <Claims/>
      </div>
    </div>
  );
}

export default ItemDetails;
