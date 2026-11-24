import React from "react";

const Card = ({ name, username, email, address, phone, website, company }) => {
  return (
    <>
      <div className="card col-1" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{username}</h6>
          <p className="card-text">email:{email}</p>
          <p>
            address: street:{address.street} <br /> suite : {address.suite}
            <br />
            zipcode:{address.zipcode}
          </p>
          <p>
            phone:{phone} <br />
            website:{website}
          </p>
          <p>Company:{company.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
