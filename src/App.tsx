import React, { useState } from "react";
import "./App.css";

function App() {
  const [bigJson, setBigJson] = useState<any>("paste bigJson here");
  const [products, setProducts] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setBigJson(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const parsedBigJson = JSON.parse(bigJson);
      setProducts(mapProducts(parsedBigJson));
    } catch (err) {
      setProducts("bigJson parsed error");
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
          <textarea style={{ width: "100%" }} rows={10} value={bigJson} onChange={handleChange} />
          <button type="submit" onClick={handleClick}>
            Format bigJson
          </button>
        </form>
      </div>

      <div>
        <h2>Products.ts</h2>
        <textarea
          style={{ width: "100%" }}
          rows={products instanceof Array && products.length > 3 ? 30 : 5}
          value={JSON.stringify(products, null, 2)}
          readOnly
        />
        {/* <pre>{JSON.stringify(products.slice(0,1), null, 2)}</pre> */}
      </div>
    </div>
  );
}

export default App;

const mapProducts = (bigJson: any) => {
  if (!Object.keys(bigJson).length) return ["wrong bigJson"];

  const CODE = "Code";
  const IS_KIT = "Is Kit?";
  const SUB_CATEGORY = "&#10;Sub Category";
  const DEPTH = "Depth&#10;(mm)";
  const DIAMETER = "Diameter&#10;(mm)";
  const HEIGHT = "Height&#10;(mm)";
  const WIDTH = "Width&#10;(mm)";
  const LENGTH = "Length&#10;(mm)";
  const OPENING_LENGTH = "Opening&#10;Length&#10;(mm)";
  const BASEPLATE = "Baseplate";
  const COLOUR = "Colour";
  const FITTING_COLOUR = "Fitting Colour";
  const FIXINGS = "Fixings";
  const DESCRIPTION = "Description";
  const QTY = "Qty";

  const mappedProducts = bigJson.Products.map((p: any) => ({
    product: p["Product"],
    category: p["Category"],
    code: p[CODE],
    isKit: p[IS_KIT] === "1" ? true : false,
    subCategory: p[SUB_CATEGORY] === "N/A" ? "undefined" : p[SUB_CATEGORY],
    depth: p[DEPTH] === "N/A" ? "undefined" : +p[DEPTH],
    diameter: p[DIAMETER] === "N/A" ? "undefined" : +p[DIAMETER],
    height: p[HEIGHT] === "N/A" ? "undefined" : +p[HEIGHT],
    width: p[WIDTH] === "N/A" ? "undefined" : +p[WIDTH],
    length: p[LENGTH] === "N/A" ? "undefined" : +p[LENGTH],
    openingLength: p[OPENING_LENGTH] === "N/A" ? "undefined" : +p[OPENING_LENGTH],
    baseplate: p[BASEPLATE] === "N/A" ? "undefined" : p[BASEPLATE],
    colour: p[COLOUR] === "N/A" ? "undefined" : p[COLOUR],
    fittingColour: p[FITTING_COLOUR] === "N/A" ? "undefined" : p[FITTING_COLOUR],
    fixing: p[FIXINGS] === "N/A" ? "undefined" : p[FIXINGS],
    description: p[DESCRIPTION] === "N/A" ? "undefined" : p[DESCRIPTION],
    qty: +p[QTY],
  }));

  return mappedProducts;
};

const getBigJson = () => {
  return {
    "Revision History": [],
    Products: [
      {
        Product: "eFlex™ Double RackEnd Barrier",
        Category: "Post",
        Code: "A-01-05-0211",
        "Is Kit?": "1",
        "&#10;Sub Category": "End",
        "Depth&#10;(mm)": "N/A",
        "Diameter&#10;(mm)": "210",
        "Height&#10;(mm)": "512",
        "Width&#10;(mm)": "N/A",
        "Length&#10;(mm)": "N/A",
        "Opening&#10;Length&#10;(mm)": "N/A",
        Baseplate: "Standard CSK",
        Colour: "Yellow",
        "Fitting Colour": "Yellow",
        Fixings: "Standard",
        "Product – Component": "N/A",
        "Product (Height) Component Key": "N/A",
        Description: "R. E. B. Post DR, YEL, CSK - End",
        Qty: "1",
        "Number&#10;Different&#10;parts": "7",
      },
      {
        Product: "eFlex™ Double RackEnd Barrier",
        Category: "Post",
        Code: "A-01-05-0212",
        "Is Kit?": "1",
        "&#10;Sub Category": "Mid",
        "Depth&#10;(mm)": "N/A",
        "Diameter&#10;(mm)": "210",
        "Height&#10;(mm)": "512",
        "Width&#10;(mm)": "N/A",
        "Length&#10;(mm)": "N/A",
        "Opening&#10;Length&#10;(mm)": "N/A",
        Baseplate: "Standard CSK",
        Colour: "Yellow",
        "Fitting Colour": "Yellow",
        Fixings: "Standard",
        "Product – Component": "N/A",
        "Product (Height) Component Key": "N/A",
        Description: "R. E. B. Post DR, YEL, CSK  - 2D - Mid",
        Qty: "1",
        "Number&#10;Different&#10;parts": "7",
      },
    ],
  };
};
