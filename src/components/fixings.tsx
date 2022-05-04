import React  from "react";

interface Props {
  fixings: any;
}

function Fixings(props: Props) {
  const { fixings } = props;

  return (
    <div>
      <h2>fixings.ts</h2>
      <div>
        <p>const fixings: ProductFixing[] =</p>
        <textarea
          style={{ width: "100%" }}
          rows={5}
          value={JSON.stringify(fixings, null, 2)}
          readOnly
        />
      </div>
    </div>
  );
}

export default Fixings;