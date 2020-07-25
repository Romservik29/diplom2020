import React, { useState } from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import EmptyContainer from './EmptyContainer'

const Wrapper = styled.div`
 width: 100%;
`;
type Audio ={
    name: string
    singer: string
    id: string
    audioUrl: string
}
type AudioProps = {
    audio: Audio[]
    role: string
    delAudio: ()=> void
    
}

export default function Audio(props:AudioProps) {
    const [playerSrc, setPlayerSrc] = useState('');
    const setSrc = (src:string) => {
        setPlayerSrc(src)
    }
    return (
        <Wrapper>
            {props.audio === undefined
                ? <EmptyContainer />
                : props.audio.map((audio) => <AudioInfo
                    name={audio.name}
                    singer={audio.singer} 
                    setSrc={setSrc}
                    delAudio={props.delAudio}
                    role={props.role}
                    id={audio.id}
                    playerSrc={playerSrc}
                    audioUrl={audio.audioUrl} />)
            }
        </Wrapper>
    )
}

