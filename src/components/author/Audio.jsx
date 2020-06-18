import React, { useState } from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EmptyContainer from './EmptyContainer'

const Wrapper = styled.div`
 width: 100%;
`;

export default function Audio(props) {
    const [playerSrc, setPlayerSrc] = useState('');
    const setSrc = (src) => {
        setPlayerSrc(src)
    }
    return (
        <Wrapper>
            {!props.audio.length > 0
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

Audio.propTypes = {
    audio: PropTypes.object.isRequired,
    addAudio: PropTypes.func.isRequired,
    delAudio: PropTypes.func.isRequired,
    authorId: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}
