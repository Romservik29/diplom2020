import styled from 'styled-components';
import React from 'react';
import EditButton from '../admin/EditButton';

const Background = styled.div`
display: flex;
width:100%;
height: 3em;
background: ${props => props.theme.background};
margin-bottom: 1em;
margin-top: 1em;
align-items: center;
justify-content: space-between;
`;

const Name = styled.div`
font-size: 1.5em;
padding-left: 1em;
font-weight: bold;
text-align: left;
`;

type SubTitleBioProps = {
    name: string
    authorId: string
    role: string
    bio: string
    changeBio: () => void
}

const SubTitleBio = (props: SubTitleBioProps) => {
    return (
        <Background>
            <Name>{props.name}</Name>
            {
                props.role === 'admin'
                && <div style={{ paddingRight: '6px' }}>
                    <EditButton authorId={props.authorId} editId={props.authorId} changeBio={props.changeBio} bio={props.bio} />
                </div>
            }
        </Background >
    )
}

export default SubTitleBio