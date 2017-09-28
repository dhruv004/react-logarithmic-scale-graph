"use strict";
import React,{Component} from 'react';

const chart = ({width,height,children}) => {
  return(
    <svg width={width} height={height}>{children}</svg>
  )
}

export default chart;
