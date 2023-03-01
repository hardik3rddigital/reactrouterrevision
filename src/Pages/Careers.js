import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Careers() {
  return (
    <>
      <div className="Careers mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Open"
              After="Positions"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers