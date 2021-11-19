import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetail() {



  const [user, setUsers] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((d) => d.json())
      .then((d) => {
        setUsers(d.data);
      });
  }, [id]);

  

  return (
    <div>
      {
        <div key={user.id}>
          <img src={user.avatar} alt="img" />
          <h3>{user.first_name}</h3>
          <h4>{user.last_name}</h4>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
}

export default UserDetail;
