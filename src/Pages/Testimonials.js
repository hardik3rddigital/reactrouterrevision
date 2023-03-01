import React from "react";
import SectionDivider from "../SmallComponents/SectionDivider";
import SectionTitle from "../SmallComponents/SectionTitle";
import { DaulColor } from "../CSS/VariableCSS";

function Testimonials() {
  return (
    <>
      <div className="Testimonials mt-5">
        <div className="container">
          <div className="">
            <SectionTitle
              Before="Our"
              After="Testimonials"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
