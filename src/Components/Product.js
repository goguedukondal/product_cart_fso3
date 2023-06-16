import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const server = (newdata) => {
    return axios.post("http://localhost:4005/cart", newdata);
  };

  const add = (product) => {
    let newdata = {
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
    };
    server(newdata)
      .then((response) => {
        // console.log(response.data);
        alert("Added to Cart Successfully");
        // Do something with the response data
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
        // Handle the error appropriately
      });
  };

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        marginTop: "50px",
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "50px",
      }}
    >
      {products.map((product) => {
        return (
          <div style={{ padding: "10px" }} key={product.id}>
            <img
              width="150px"
              height="150px"
              src={product.image}
              alt="product"
            />
            <h3>{product.title}</h3>
            <p style={{ color: "blue" }}>$ {product.price}</p>
            <button
              onClick={() => add(product)}
              style={{
                backgroundColor: "Teal",
                width: "100px",
                height: "30px",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
