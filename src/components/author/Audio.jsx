import React from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import SubTitle from './SubTitle'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
 width: 100%;
`;

export default function Audio(props) {
    const handleAudioAdd = (file,name,second) => {
        const formData = new FormData();
        formData.append('audio', file, file.name);
        formData.append('name', name);
        formData.append('singer', second)
        formData.append('authorId', props.authorId);
        props.addAudio(formData);
    };
    return (
        <Wrapper>
            <SubTitle name="Аудиозаписи" addFunc={handleAudioAdd} add />
            {props.audio.map((audio)=><AudioInfo delAudio={props.delAudio} authenticated={props.authenticated} id={audio.id} name={audio.name} audioUrl={audio.audioUrl}/>)}
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
