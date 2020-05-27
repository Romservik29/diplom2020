import React from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import SubTitle from './SubTitle'

const Wrapper = styled.div`
 width: 100%;
`;


export default function Audio(props) {
    const handleAudioAdd = (file,name) => {
        const formData = new FormData();
        formData.append('audio', file, file.name);
        formData.append('name', name);
        formData.append('authorId', props.authorId);
        props.addAudio(formData);
    };
    return (
        <Wrapper>
            <SubTitle name="Аудиозаписи" addFunc={handleAudioAdd} add />
            {props.audio.map((audio)=><AudioInfo authenticated={props.authenticated} name={audio.name} audioUrl={audio.audioUrl}/>)}
        </Wrapper>
    )
}
