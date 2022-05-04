import React, { useState } from "react";
import "./App.css";
import Fixings from "./components/fixings";
import Products from "./components/product";
import ProductBreakdowns from "./components/productBreakdowns";
import { mapFixings, mapProducts, mapProductBreakdowns } from "./utils/utils";

const fakeBigJson = "paste bigJson here";

const fakeBigJson1 = JSON.stringify(
  {
    "Kit Breakdown": [
      {
        Product: "Universal Swing Gate",
        Code: "A-01-01-0001",
        "Code Item": "A-01-01-0001-1",
        "Kit Description": "Ped Post, BLK",
        "Component Code": "B-02-01-0036",
        Category: "Fixing",
        "Component Description": "12mm Hex Head Through Bolt, Z/P (4pk)",
        "Qty Required": "1",
        "In Products Tab": "4",
        "Product&#10;Component": "Universal Swing Gate B-02-01-0036",
      },
    ],
  },
  null,
  2
);

const fakeBigJsonFixings = JSON.stringify(
  {
    Products: [],
    "Fixing Change": [
      {
        Product: "eFlex™ Double RackEnd Barrier",
        Baseplate: "Stainless Steel CSK",
        "Fixing ": "Chemical Sleeve",
        "Product&#10;Baseplate&#10;Key": "eFlex™ Double RackEnd Barrier Stainless Steel CSK Chemical Sleeve 1",
        Notes: "Remove 4 from BOM if fixing selected",
        "Product Part Key": "eFlex™ Double RackEnd Barrier B-02-01-0008",
        Code: "B-02-01-0008",
        Category: "Fixing",
        Description: "15mm CSK SKT Head Through Bolt, A2",
        "Qty Required": "-4",
      },
    ],
  },
  null,
  2
);
function App() {
  const [bigJson, setBigJson] = useState<any>(fakeBigJson);

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
            <a href="https://beautifytools.com/excel-to-json-converter.php">
              https://beautifytools.com/excel-to-json-converter.php
            </a>
          </li>
          <li>
            <span>2. </span>
            <span>Paste big json to textarea.</span>
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
