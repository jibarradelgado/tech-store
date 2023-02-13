import "./styles.css";
import { useEffect, useState } from "react";

import api from "./api";

export default function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState("name");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      api.search(query).then(setProducts);
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [query]);

  // useEffect(() => {
  //   api.order(select).then(products => {
  //     setProducts(products)
  //   }
  // )}, [select])

  return (
    <div className="App">
      <h1>Technology store</h1>
      <input
        name="text"
        placeholder="Search product"
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
          api.order(e.target.value).then(setProducts);
        }}
      >
        <option value="name">name</option>
        <option value="price">price</option>
      </select>
      <ul>
        {products.map((product) => (
          <li>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
