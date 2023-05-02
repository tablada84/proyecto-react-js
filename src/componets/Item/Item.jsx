import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <a href=" " className="Productos">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxCAvkT_eUJ_bCJ42QkoDsCKSFMYGKiWH3F6uUCoM0sBnXGrNpbDq2-_EKqAO84CKwBk&usqp=CAU"
        alt=""
      />
      <p>Malbec</p>
    </a>
  );
};

export default Item;
