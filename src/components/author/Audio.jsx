import React,{useState} from 'react'
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
                    setSrc={setSrc}
                    delAudio={props.delAudio}
                    authenticated={props.authenticated}
                    id={audio.id} name={audio.name}
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
    authenticated: PropTypes.bool.isRequired
}
