import React from "react";
import { DaulColor,maxWidth } from "../CSS/VariableCSS";
import SectionDivider from "../SmallComponents/SectionDivider";
import SectionTitle from "../SmallComponents/SectionTitle";
import { AboutDataTitleDescription } from "../Json/AboutData";


function About() {

  return (
    <>
      <div className="About mt-5">
        <div className="container">
          <div className="">
            <SectionTitle
              Before="Trusted"
              After="Partner"
              DaulColor={DaulColor}
            />
            <SectionDivider />
            <div className="mt-4 text-center">
              <p className="" style={maxWidth}>{AboutDataTitleDescription.titleDescription}</p>
              <p className="mt-3">{AboutDataTitleDescription.titleDescriptionSmall}</p>
            </div>
          </div>

          <div className="row">

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
