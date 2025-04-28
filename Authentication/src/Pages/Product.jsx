import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div
      
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        textAlign: "center",
        marginTop:"20px",
        width:"90%",
        margin:"auto",
        position:"relative",
        top:"20px"
      }}
    >
      {data.map((el) => (
        <div
          key={el.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            backgroundColor: "whitesmoke",
          }}
        >
          <h3>{el.title}</h3>
          <Link to={`/product/${el.id}`}><img src={el.image} alt={el.title} height={"200px"} /></Link>
          <h3>{el.category}</h3>
          <b><p>{el.description}</p></b>
          <h3>${el.price}</h3>
         <button>Delete</button>
         <button style={{marginLeft:"20px",padding:"0px 20px"}}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Product;

