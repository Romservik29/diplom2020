import React from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import SubTitle from './SubTitle'

const Wrapper = styled.div`
 width: 100%;
`;


export default function Audio(props) {
    const handleAudioAdd = (file,name) => {
        debugger
        const formData = new FormData();
        formData.append('audio', file, file.name);
        formData.append('name', name);
        formData.append('authorId', "jj");
        formData.append('name', name);
        props.addAudio(formData);
    };
    return (
        <Wrapper>
            <SubTitle name="Аудиозаписи" audioUrl="" addFunc={handleAudioAdd} add />
            {props.audio.map((audio)=><AudioInfo audioUrl={audio.audioUrl}/>)}
        </Wrapper>
    )
}
