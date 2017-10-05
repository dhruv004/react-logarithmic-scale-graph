"use strict";
import React,{Component} from 'react';
import Chart from './chart';
import DataSeries from './data-series';

export default class BarChart extends Component{
    constructor(){
        super();
        this.state = {
            "width":900
        }
    }
    componentDidMount = () => {
        this.setState({
            "width":window.innerWidth
        });
        window.addEventListener('resize', this.changeWidth);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.changeWidth);
    }

    changeWidth = () => {
        this.setState({
            "width":window.innerWidth
        });
    }

    render(){
        const {sort, input, color, alternateColor, barHeight, axisMargin, barPadding} = this.props;
        const {width} = this.state;
        let calculatedWidth = width<767 ? width*0.88 : width < 1024 ? width*0.75 : width* 0.60;
        let data = input;
        let height = height = data.length * (barHeight+barPadding*2) + axisMargin*2;

        return(
            <Chart width={calculatedWidth} height={height}>
                <DataSeries 
                    data={data} 
                    width={calculatedWidth} 
                    height={height} 
                    barPadding={barPadding} 
                    axisMargin={axisMargin} 
                    barHeight={barHeight} 
                    color={color} 
                    alternateColor={alternateColor}
                    sort={sort} />
            </Chart>
        )
    }
}
