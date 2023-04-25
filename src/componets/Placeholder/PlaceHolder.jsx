import React, { useEffect, useState } from "react";

const PlaceHolder = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);

  return (
    <div>
      <h2>Personajes</h2>
    </div>
  );
};

export default PlaceHolder;
