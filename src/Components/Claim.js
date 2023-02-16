import { useState } from "react";
import ClaimForm from "./ClaimForm";

function Claim({ claim, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  return (
    <div className="claim">
      {viewEditForm ? (
        <ClaimForm
          claimDetails={claim}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          {" "}
          <h4>{claim.user_name}</h4>
          <h5>{claim.claim_note}</h5>
          <button onClick={() => handleDelete(claim.id)}>delete</button>
        </>
      )}
      <button onClick={toggleView}>edit this claim</button>
    </div>
  );
}

export default Claim;
