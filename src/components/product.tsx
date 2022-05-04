import React  from "react";

interface Props {
  products: any;
}

function Products(props: Props) {
  const { products } = props;

  const SLICE_PRODUCTS_AT = 960; // this is to make 2 arrays from one big

  return (
    <div>
      <h2>Products.ts</h2>
      <div>
        <p>const const products1: Product[] =</p>
        <p>I make arr.slice(0,{SLICE_PRODUCTS_AT})</p>
        <textarea
          style={{ width: "100%" }}
          rows={products instanceof Array && products.length > 3 ? 30 : 5}
          value={JSON.stringify(products.slice(0, SLICE_PRODUCTS_AT), null, 2)}
          readOnly
        />
      </div>
      <div>
        <p>const const products2: Product[] =</p>
        <p>I make arr.slice({SLICE_PRODUCTS_AT})</p>
        <textarea
          style={{ width: "100%" }}
          rows={products instanceof Array && products.length > 3 ? 30 : 5}
          value={JSON.stringify(products.slice(SLICE_PRODUCTS_AT), null, 2)}
          readOnly
        />
      </div>
    </div>
  );
}

export default Products;