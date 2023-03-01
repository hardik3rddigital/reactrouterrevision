import React from "react";

function SectionTitle(Props) {
  return (
    <h4 className="fw-bold text-center">
      {Props.Before} <span style={Props.DaulColor}>{Props.After}</span>
    </h4>
  );
}

export default SectionTitle;
