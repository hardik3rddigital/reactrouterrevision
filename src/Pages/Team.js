import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Team() {
  return (
    <>
      <div className="Team mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Meet Our"
              After="Team"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Team