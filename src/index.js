import React,{Component} from 'react';
import BarChart from './horizontal-graph/bar-chart'

class HorizontalGraph extends Component{
    render(){
        var input = [{
            text:'one',
            alternateText:'1',
            level:1,
            v:1
        },{
            text:'two',
            alternateText:'2',
            level:2,
            v:2
        },{
            text:'three',
            alternateText:'3',
            level:3,
            v:3
        },{
            text:'four',
            alternateText:'4',
            level:4,
            v:4
        },
        {
            text:'five',
            alternateText:'5',
            level:5,
            v:5
        },
        {
            text:'six',
            alternateText:'6(six)',
            level:6,
            v:6
        },{
            text:'seven',
            alternateText:'7(seven)',
            level:7,
            v:7
        }]
        return(
            <h1>
                <BarChart input={input} {...this.props}/>
            </h1>
        )
    }
}

HorizontalGraph.defaultProps={
    color:"#a1e3e2",
    alternateColor:"#fde4bb",
    barHeight:35,
    axisMargin:40,
    barPadding:5,
    sort:'ascending'
}

export default HorizontalGraph;