export const mapProductBreakdowns = (bigJson: any) => {
  if (!Object.keys(bigJson).length) return ["wrong bigJson"];

  const KIT_BREAKDOWN = "Kit Breakdown"; // object name

  const PRODUCT = "Product";
  const CODE = "Code";
  const COMPONENT_CODE ="Component Code"
  const CATEGORY = "Category";
  const COMPONENT_DESCRIPTION = "Component Description";
  const QTY_REQUIRED = "Qty Required";

  return bigJson[KIT_BREAKDOWN].map((p: any) => ({
    product: p[PRODUCT],
    parentCode: p[CODE],
    code: p[COMPONENT_CODE],
    category: p[CATEGORY],
    description: p[COMPONENT_DESCRIPTION] === "N/A" ? "undefined" : p[COMPONENT_DESCRIPTION],
    qty: +p[QTY_REQUIRED],
  }));
};

export const mapFixings = (bigJson: any) => {
  if (!Object.keys(bigJson).length) return ["wrong bigJson"];

  const FIXING_CHANGE = "Fixing Change"; // object name

  const PRODUCT = "Product";
  const BASEPLATE = "Baseplate";
  const FIXINGS = "Fixing ";
  const CODE = "Code";
  const CATEGORY = "Category";
  const DESCRIPTION = "Description";
  const QTY_REQUIRED = "Qty Required";

  return bigJson[FIXING_CHANGE].map((p: any) => ({
    product: p[PRODUCT],
    baseplate: p[BASEPLATE] === "N/A" ? "undefined" : p[BASEPLATE],
    fixing: p[FIXINGS] === "N/A" ? "undefined" : p[FIXINGS],
    code: p[CODE] === "N/A" ? "undefined" : p[CODE],
    category: p[CATEGORY],
    description: p[DESCRIPTION] === "N/A" ? "undefined" : p[DESCRIPTION],
    qty: +p[QTY_REQUIRED],
  }));
};

export const mapProducts = (bigJson: any) => {
  if (!Object.keys(bigJson).length) return ["wrong bigJson"];

  const PRODUCTS = "Products"; // object name

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

  return bigJson[PRODUCTS].map((p: any) => ({
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
};

export const getBigJson = () => {
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
