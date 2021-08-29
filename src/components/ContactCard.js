import React from "react";
import { Link } from 'react-router-dom';

export default function ContactCard(props) {
  console.log(props);
  return (
    <Link
      to={{
        pathname: `/contact/${props.id}`,
        state: {
          ...props,
        },
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        <img
          src={props.image}
          height={80}
          width={80}
          style={{ borderRadius: "10px", objectFit: "cover",  }}
          alt={props.name}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          <h5>{props.name}</h5>
          <p>{props.email}</p>
        </div>
      </div>
    </Link>
  );
}
