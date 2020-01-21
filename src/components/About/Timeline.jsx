import React, {Component} from 'react'
import * as d3 from 'd3'
import {withFauxDOM} from 'react-faux-dom'
import TimelinesChart  from 'timelines-chart'

class Timeline extends Component{
  

  componentDidMount(){


    const faux = this.props.connectFauxDOM('div','chart')
    
    TimelinesChart()
			.data([
        {
          group: "group1name",
          data: [
            {
              label: "label1name",
              data: [
                {
                  timeRange: [2014 , 2015],
                },
                {
                  timeRange: [2016, 2020],
                }
              ]
            },
            // {
            //   label: "label2name",
            //   data: [...]
            // },
            // (...)
          ],
        }
        
      ])
			.zQualitative(true)

    d3.select(faux).append('svg')
  }

  render(){
    return(
      <>
      test
      {this.props.chart}
      </>
    )
  }
}

export default withFauxDOM(Timeline)