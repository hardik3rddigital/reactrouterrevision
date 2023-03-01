import React from 'react'
import SectionDivider from '../SmallComponents/SectionDivider'
import SectionTitle from '../SmallComponents/SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function Blog() {
  return (
    <>
      <div className="Blog mt-5">
      <div className="container">
          <div className="">
            <SectionTitle
              Before="Latest"
              After="Blog"
              DaulColor={DaulColor}
            />
            <SectionDivider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog