import React from "react";
import CircularLoader from "./Circular";

export const Circular = () => (
  <p style={{ display: 'flex', alignItems: 'center' }}>
    <CircularLoader /> <span style={{marginLeft: '1rem'}}>Loading goodness…</span>
  </p>
)
