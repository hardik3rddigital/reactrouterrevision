import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Portfolio() {
  return (
    <>
      <div className="Portfolio mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Our"
              After="Portfolio"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio