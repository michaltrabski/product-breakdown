import React, { useState } from "react";
import "./App.css";
import Fixings from "./components/fixings";
import Products from "./components/product";
import ProductBreakdowns from "./components/productBreakdowns";
import { mapFixings, mapProducts, mapProductBreakdowns } from "./utils/utils";


function App() {
  const [bigJson, setBigJson] = useState<any>("paste bigJson here");

  const [products, setProducts] = useState<any>("");
  const [fixings, setFixings] = useState<any>("");
  const [productBreakdowns, setProductsBreakdowns] = useState<any[]>([""]);

  const handleBigJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setBigJson(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const parsedBigJson = JSON.parse(bigJson);
      setProducts(mapProducts(parsedBigJson));
      setFixings(mapFixings(parsedBigJson));
      setProductsBreakdowns(mapProductBreakdowns(parsedBigJson));
    } catch (err) {
      setProducts("bigJson parsed error");
      setFixings("bigJson parsed error");
      setProductsBreakdowns(["bigJson parsed error"]);
    }
  };

  return (
    <div className="app">
      <h1>Product breakdown json mapper!</h1>
      <div>
        <ul>
          <li>
            <span>1. </span>
            <span>Convert whole excel with breakdown to one big json file.</span>
            <br />
            <strong>You have to use this tool: </strong>
            <a href="https://beautifytools.com/excel-to-json-converter.php">
              https://beautifytools.com/excel-to-json-converter.php
            </a>
          </li>
          <li>
            <span>2. </span>
            <span>Paste big json to textarea.</span>
          </li>
          <li>
            <span>3. </span>
            <span>Click format bigJson. It takes some time... :)</span>
          </li>
          <li>
            <span>4. </span>
            <span>You will get arrays ready to copy and paste.</span>
          </li>
          <li>
            <span>5. </span>
            <span>You will have to format stringified version to normal json in your edditor.</span>
          </li>
          <li>
            <span>6. </span>
            <span>Use ctrl+h to replace all "undefined" to normal undefined.</span>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <textarea style={{ width: "100%" }} rows={10} value={bigJson} onChange={handleBigJsonChange} />
          <button type="submit" onClick={handleClick}>
            Format bigJson
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />

      <ProductBreakdowns productBreakdowns={productBreakdowns} />
      <br />
      <br />
      <br />
      <br />

      <Fixings fixings={fixings} />
      <br />
      <br />
      <br />
      <br />

      <Products products={products} />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
