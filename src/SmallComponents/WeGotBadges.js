import React from 'react'
import SectionDivider from './SectionDivider'
import SectionTitle from './SectionTitle'
import { DaulColor } from '../CSS/VariableCSS'

function WeGotBadges() {
  return (
    <>
        <div className="WeGotBadges">
          <div className="container">
            <div className="We_do pt-5">
              <SectionTitle Before="We Got" After="Badges!" DaulColor={DaulColor} />
              <SectionDivider />

              
            </div>
          </div>
        </div>
    </>
  )
}

export default WeGotBadges