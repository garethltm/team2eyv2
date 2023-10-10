import React from "react";
import { Frame } from "../../components/Frame";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap-group">
          <div className="group">
            <div className="overlap-group">
              <div className="vector-wrapper">
                <img className="vector" alt="Vector" src="https://c.animaapp.com/Nf94UuJ1/img/vector.svg" />
              </div>
              <div className="div">
                <Frame className="frame-7" divClassName="frame-instance" property1="default" />
                <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-2" />
                <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-3" />
                <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-4" />
                <Frame className="frame-7-instance" divClassName="frame-instance" property1="variant-5" />
              </div>
            </div>
          </div>
          <img className="cbs" alt="Cbs" src="https://c.animaapp.com/Nf94UuJ1/img/cbs-1@2x.png" />
        </div>
      </div>
    </div>
  );
};
