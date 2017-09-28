"use strict";
import React,{Component} from 'react';
import Chart from './chart';
import DataSeries from './data-series';
var CredentialLevelEnum = {
    "BASICALLYFAMILIAR" : {"name": "Basically Familiar", "level" : 1, "value": "BASICALLYFAMILIAR", "text" : "A typical user can earn level 1 after one week or 40 hrs of intense study"},
    "FAMILIAR" : {"name": "Familiar", "value": "FAMILIAR", "level" : 2, "text" : "A typical user can earn level 2 after two weeks or 80 hrs of intense study"},
    "DEEPLYFAMILIAR" : {"name": "Deeply Familiar", "level" : 3, "value": "DEEPLYFAMILIAR", "text" : "Implies that the user has about one rigorous college class's or 150 hrs worth of experience"},
    "BASICALLYQUALIFIED":  {"name": "Basically Qualified", "level" : 4, "value": "BASICALLYQUALIFIED", "text" : "Implies that the user has about 500 hrs of sustained experience - the equivalent of 3 college classes"},
    "QUALIFIED": {"name": "Qualified","level" : 5, "value": "QUALIFIED", "text" : "Suggests a level of expertise that likely took half a year or 1000 hrs to develop when working full time at the subject, or 6 college classes"},
    "HIGHLYQUALIFIED" : {"name": "Highly Qualified", "value": "HIGHLYQUALIFIED", "level" : 6, "text" : "Indicates a level of expertise commensurate with a full year of direct experience, 2000 hours or 12 college classes"},
    "EXPERT" : {"name": "Expert", "value": "EXPERT", "level" : 7, "text" : "Indicates two full years worth of direct, full time experience was likely needed to build this level of expertise in the subject"}
  };

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

    GET_DATE_IN_MMMYYYY_FORMAT = (dateString) => {
        if(!dateString) return "";
        var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var dateObj = new Date(dateString);
    
        return m_names[dateObj.getMonth()] + ", " + dateObj.getFullYear();
    }

    render(){
        const {sort, input} = this.props;
        const {width} = this.state;
        let calculatedWidth = width<767 ? width*0.88 : width < 1024 ? width*0.75 : width* 0.60;
        let data = input;
        let height=300,barHeight=35,axisMargin=40,barPadding=5;

        height = data.length * (barHeight+barPadding*2) + axisMargin*2;

        console.log(calculatedWidth)
        console.log(height)
        return(
        <Chart width={calculatedWidth} height={height}>
            <DataSeries data={data} width={calculatedWidth} height={height} barPadding={barPadding} axisMargin={axisMargin} barHeight={barHeight} color="#a1e3e2" alternateColor="#fde4bb" sort={sort} />
        </Chart>
        )
    }
}
