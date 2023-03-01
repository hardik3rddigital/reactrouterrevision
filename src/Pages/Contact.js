import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Contact() {
  return (
    <>
      <div className="Contact mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Get in"
              After="Touch"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact