import React from 'react'
import { ResponsivePie } from '@nivo/pie'

export default function TestResult(props) {

const data =[
    {
        "id": "Не верных",
        "label": "Не верных",
        "value": 3,
      },
      {
        "id": "Верных",
        "label": "Верных",
        "value": 7,
      },
]

    return (
        <div style={{height:'400px',width:'400px'}}>
                <ResponsivePie
        data={data}
        margin={{ top: 20, right: 90, bottom: 60, left: 90 }}
        sortByValue={true}
        innerRadius={0.35}
        colors={{ scheme: 'set1' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableRadialLabels={false}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    )
}
