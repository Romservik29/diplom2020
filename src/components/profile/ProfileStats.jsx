
import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
class ProfileStats extends React.Component {
    state = {
        data: [
            {
                'taste': "1",
                'кол-во': 0
            },
            {
                'taste': "2",
                'кол-во': 0
            },
            {
                'taste': "3",
                'кол-во': 0
            },
            {
                'taste': "4",
                'кол-во': 0
            },
            {
                'taste': "5",
                'кол-во': 1
            },
            {
                'taste': "6",
                'кол-во': 0
            },
            {
                'taste': "7",
                'кол-во': 0
            },
            {
                'taste': "8",
                'кол-во': 0
            },
            {
                'taste': "9",
                'кол-во': 0
            },
            {
                'taste': "10",
                'кол-во': 0
            },
        ]
    }
    componentDidMount() {

        for (let key in this.props.testResults) {
            this.state.data.push(
                {
                    "taste": key,
                    "кол-во": test[key]
                })
        }
    }

    render() {

        return <ResponsiveRadar
            data={this.state.data}
            keys={['кол-во']}
            indexBy="taste"
            maxValue="auto"
            margin={{ top: 50, right: 60, bottom: 20, left: 60 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor="black"
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={10}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'category10' }}
            fillOpacity={0.25}
            blendMode="normal"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
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
    }
}

export default ProfileStats