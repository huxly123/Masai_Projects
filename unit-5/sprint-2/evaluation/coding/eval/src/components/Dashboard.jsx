import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getShowError, getShowLoading, getShowSuccess } from '../Redux/ShowStore/action';

function Dashboard() {

    const dispatch = useDispatch();

    const {loading,data}=useSelector((store)=>store.shows.shows)

    useEffect(() => {
        getData();
},[])

    const getData = async() => {
        dispatch(getShowLoading())
        try {
            
            const { data } = await axios.get("http://localhost:3001/shows");
            dispatch(getShowSuccess(data))

        } catch (err) {
            dispatch(getShowError(err))
        }
    }


    return loading ? (
      <h2>Loading....</h2>
    ) : (
      <div>
        <h1>Dashboard</h1>

        {data.map((e) => (
          <div key={e.id}>
            <h2 style={{ color: "red" }}>{e.name}</h2>
            <img style={{height:"300px",width:"400px"}} src={e.url} alt="img" />
            <Link to={`/shows/${e.id}`}>
              {" "}
              <button
                style={{
                  display: "block",
                  margin: "auto",
                  width: "300px",
                  background: "green",
                  cursor: "pointer",
                  border: "none",
                  height: "30px",
                  color: "white",
                }}
              >
                View
              </button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    );
}

export default Dashboard
