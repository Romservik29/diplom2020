import styled from 'styled-components';
import React from 'react';
import DeleteButtonList, { Data } from '../admin/DeleteButtonList';

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

type SubTitleProps = {
    name: string
    data: Data[]
    authorId: string
    role: string
    delete?: boolean
    delFunc: (id: string) => void
}

const SubTitle = (props: SubTitleProps) => {

    return (
        <Background>
            <Name>{props.name}</Name>
            {
                props.role === 'admin'
                && <div style={{ paddingRight: '6px' }}>
                    {props.delete === true
                        && <DeleteButtonList data={props.data} delFunc={props.delFunc} />
                    }
                </div>
            }
        </Background >
    )
}

export default SubTitle