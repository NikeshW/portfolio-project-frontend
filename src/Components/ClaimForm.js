import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ClaimForm(props) {

  let { id } = useParams();
  const { claimDetails } = props;

  const [claim, setClaim] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    claim_note: "",
    item_id: id,
  });
  const handleTextChange = (event) => {
    setClaim({ ...claim, [event.target.id]: event.target.value });
  };
  useEffect(() => {
    if (claimDetails) {
        setClaim(claimDetails);
    }
  }, [id, claimDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(claim, id);
    if (claimDetails) {
      props.toggleView();
    }
    setClaim({
        user_name: "",
        email: "",
        phone_number: "",
        claim_note: "",
        item_id: id,
    });
    
  };

  return <div>
          {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">Name:</label>
        <input
          id="user_name"
          type="text"
          value={claim.user_name}
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={claim.email}
          onChange={handleTextChange}
          placeholder="Email"
          required
        />
        <label htmlFor="phone_number">Phone number:</label>
        <input
          id="phone_number"
          type="number"
          name="phone_number"
          value={claim.phone_number}
          onChange={handleTextChange}
        />
        <label htmlFor="claim_note">Claim note:</label>
        <textarea
          id="claim_note"
          type="text"
          name="claim_note"
          value={claim.claim_note}
          placeholder="Leave a note"
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
  </div>;
}

export default ClaimForm;
