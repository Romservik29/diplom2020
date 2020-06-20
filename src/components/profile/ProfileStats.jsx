
import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
class ProfileStats extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        for (let key  in this.props.testResults) {
            
            this.setState((state)=> {
                return {
                    data:[ ...state.data,
                    {
                    "taste": key,
                    "кол-во": this.props.testResults[key]}]
                }})
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