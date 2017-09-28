"use strict";
import React,{Component} from 'react';
import {scaleLinear,scaleOrdinal} from 'd3-scale';
import {range,max} from 'd3-array';
import * as d3 from 'd3';
import _ from 'underscore';
import Bar from './bar';

export default class dataSeries extends Component{
  render(){
    var self = this;
    const {sort,data,height,width,color,alternateColor,barHeight,axisMargin,barPadding}=this.props;

    if (sort === 'ascending') data.sort(function(p, q){return p.v - q.v});
    if (sort === 'descending') data.sort(function(p, q){return q.v - p.v});

    var ypos=axisMargin+barPadding,
        labelWidth = width*0.25,
        margin = 20,
        availableWidth = width-labelWidth-margin;

    var xScale = d3.scaleLinear()
        .domain([0,1,2,3,4,5,6,7])
        .range([0,availableWidth/30,availableWidth/14,availableWidth/8,availableWidth/5,availableWidth/3,availableWidth/1.6,availableWidth]);

    var  yScale = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([0, height-axisMargin]);

    var xAxis = d3.axisTop()
              .scale(xScale)
              .tickValues([1,2,3,4,5,6,7])
              .tickFormat(d3.format(",.0f"))
              .tickSize(height-axisMargin);

    var bars = _.map(data, function(point, i) {
        if(i!=0){
            ypos= ypos + yScale.bandwidth();
        }
        return (
            <Bar width={xScale(point.v)}
                point={point}
                labelWidth={labelWidth}
                totalWidth={width}
                barHeight={barHeight}
                ypos={ypos}
                color={i % 2 == 0 ? color : alternateColor} key={i}/>
        )
      });

    d3.select(self.refs['Xaxis'])
      .attr("transform", "translate(" + labelWidth + ","+height+")")
      .call(xAxis);

    return(
        <g className="chart">
          <line x1={labelWidth} y1={axisMargin+1} x2={width} y2={axisMargin+1} style={{"stroke":"#ddd"}}/>
          <line x1={labelWidth} y1={axisMargin+1} x2={labelWidth} y2={height} style={{"stroke":"#ddd"}}/>
          <g ref="Xaxis" className="axisHorizontal"></g>
          {bars}
        </g>
    )
  }
}
