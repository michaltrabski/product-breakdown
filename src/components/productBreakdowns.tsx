import React  from "react";

interface Props {
  productBreakdowns: any[];
}

function ProductBreakdowns(props: Props) {
  const data = props.productBreakdowns

  const SLICE_AT = 500; // this is to make 2 arrays from one big

  return (
    <div>
      <h2>product-breakdowns.ts</h2>
      <div>
        <p>const productBreakdowns: ProductBreakdown[] =</p>
        <p>I make arr.slice(0,{SLICE_AT})</p>
        <textarea
          style={{ width: "100%" }}
          rows={data instanceof Array && data.length > 3 ? 30 : 3}
          value={JSON.stringify(data.slice(0, SLICE_AT), null, 2)}
          readOnly
        />
      </div>
      <div>
        <p>const productBreakdowns2: ProductBreakdown[] =</p>
        <p>I make arr.slice({SLICE_AT})</p>
        <textarea
          style={{ width: "100%" }}
          rows={data instanceof Array && data.length > 3 ? 30 : 3}
          value={JSON.stringify(data.slice(SLICE_AT), null, 2)}
          readOnly
        />
      </div>
    </div>
  );
}

export default ProductBreakdowns;