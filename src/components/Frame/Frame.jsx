/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, className, divClassName }) => {
  return (
    <div className={`frame ${property1} ${className}`}>
      <div className={`home ${divClassName}`}>
        {property1 === "default" && <>Home</>}

        {property1 === "variant-2" && <>About</>}

        {property1 === "variant-3" && <>Skills</>}

        {property1 === "variant-4" && <>Projects</>}

        {property1 === "variant-5" && <>Contact</>}
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
};
