import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Individual() {
    const { id } = useParams();

    const [change,setChange]=useState(0)

    const [user,setUser]=useState([])

    useEffect(() => {
        gett();
    },[id,change])

    const gett = async () => {
    const { data } = await axios.get(`http://localhost:3001/shows/${id}`);

    setUser([data])
    }



    return (
      <div>
        <Link to="/">
          {" "}
          <button
            style={{
              display: "block",
              margin: "auto",
              width: "100px",
              background: "brown",
              cursor: "pointer",
              border: "none",
              height: "30px",
            }}
          >
            Back
          </button>
        </Link>
        {user.map((e) => (
          <div key={e.id}>
            <h2 style={{ color: "red" }}>{e.name}</h2>
            <img src={e.url} alt="img" />
            <p
              style={{
                margin: "auto",
                width: "700px",
                border: "3px solid green",
                background: "#EEEEEE",
                marginTop: "20px",
              }}
            >
              {e.description}
            </p>
            {!e.ticket && (
              <button
                onClick={async () => {
                  await axios.patch(`http://localhost:3001/shows/${id}`, {
                    ticket: true,
                  });
                  setChange(change + 1);
                  alert("Show Booked");
                }}
                style={{
                  display: "block",
                  margin: "auto",
                  width: "300px",
                  background: "yellow",
                  cursor: "pointer",
                  border: "none",
                  height: "30px",
                  marginTop: "20px",
                }}
              >
                Buy Ticket
              </button>
            )}
            {e.ticket && (
              <Link to="/qr">
                {" "}
                <button
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "300px",
                    background: "pink",
                    cursor: "pointer",
                    border: "none",
                    height: "30px",
                    marginTop: "20px",
                  }}
                >
                  Download Ticket
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
}

export default Individual
