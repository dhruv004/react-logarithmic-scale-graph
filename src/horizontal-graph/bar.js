"use strict";
import React,{Component} from 'react';

const bar = ({width,barHeight,color,ypos,labelWidth,point,totalWidth}) => {
  return(
    <g>
      <text x={labelWidth-labelWidth*0.1} 
            y={ypos+barHeight/3} 
            textAnchor="end" 
            fill="#737373" 
            style={{"fontSize":16}}>{point.text}</text>
      <text x={labelWidth-labelWidth*0.1} 
            y={ypos+barHeight*2/3} 
            textAnchor="end" 
            fill="#cbcbcb" 
            style={{"fontSize":11}}>{point.alternateText}</text>
      <rect fill={color}
          width={width}
          height={barHeight}
          x={labelWidth}
          y={ypos}
          fillOpacity={0.8}/>
      <text x={labelWidth+width+labelWidth*0.1>=totalWidth ? totalWidth-totalWidth*0.01 : labelWidth+width+labelWidth*0.1} 
            y={ypos+barHeight/2} 
            textAnchor="start" 
            fill="#737373" 
            style={{"fontSize":16}}>{point.v>=1 ? point.v : ""}</text>
    </g>

  )
}

export default bar;
