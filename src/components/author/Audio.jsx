import React from 'react'
import AudioInfo from '../AudioInfo'
import styled from 'styled-components'
import SubTitle from './SubTitle'

 const Wrapper = styled.div`
 width: 100%;
`;

 const AudioWrapper=styled.div`
width: 100%;
 `;

export default function Audio() {


    return (
        <Wrapper>
            <SubTitle name="Аудиозаписи"  add/>

            <AudioWrapper>
                <AudioInfo/>
                <AudioInfo/>
                <AudioInfo/>
                <AudioInfo/>
            </AudioWrapper>
        </Wrapper>
    )
}
