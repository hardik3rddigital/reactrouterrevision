import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Services() {
  return (
    <>
      <div className="Services mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Our"
              After="Services"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services