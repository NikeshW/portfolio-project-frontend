import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Claim from "./Claim";
import ClaimForm from "./ClaimForm";

const API = process.env.REACT_APP_API_URL;

function Claims() {
    const [claims, setClaims] = useState([])
    const { id } = useParams()

     const handleAdd = (newClaim) => {
    axios
      .post(`${API}/items/${id}/claims`, newClaim)
      .then(
        (response) => {
          setClaims([response.data, ...claims]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedClaim) => {
    axios
      .put(`${API}/items/${id}/claims/${updatedClaim.id}`, updatedClaim)
      .then((response) => {
        const copyClaimArray = [...claims];
        const indexUpdatedClaim = copyClaimArray.findIndex((claim) => {
          return claim.id === updatedClaim.id;
        });
        copyClaimArray[indexUpdatedClaim] = response.data;
        setClaims(copyClaimArray);
      })
      .catch((c) => console.warn("catch", c));
    };
      const handleDelete = (id) => {
        axios
          .delete(`${API}/items/${id}/claims/${id}`)
          .then(
            (response) => {
              const copyClaimArray = [...claims];
              const indexDeletedClaim = copyClaimArray.findIndex((claim) => {
                return claim.id === id;
              });
              copyClaimArray.splice(indexDeletedClaim, 1);
              setClaims(copyClaimArray);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

 
  useEffect(() => {
    axios.get(`${API}/items/${id}/claims`).then((response) => {
      console.log(response.data);
      setClaims(response.data);
    });
  }, [id]);
  return (
    <div>
    <section className="claims">
      <h2>Claim this item</h2>
      <ClaimForm handleSubmit={handleAdd}/>
      
      {claims.map((claim) => (
        <Claim
          key={claim.id}
          claim={claim}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
    </div>
  )
}

export default Claims