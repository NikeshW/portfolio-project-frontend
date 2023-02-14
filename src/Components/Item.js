import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function Item({ item }) {
  return (
    <div className="items">
      <Link to={`/items/${item.id}`}>
        <img src={item.picture} alt="no"></img>
      </Link>
      {/* <h3>Name: {item.item_name}</h3> */}
      {/* <p>Pick-up instructions: {item.pick_up_instructions}</p> */}
      {/* <p>Posted on: {dateFormat(item.posted_date,"longDate")}</p> */}
      {/* <Link to={`/items/${item.id}`}><button>Item details</button></Link> */}
    </div>
  );
}

export default Item;
