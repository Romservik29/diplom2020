import React from 'react'
import styled from 'styled-components'

const StyledProfileImage =styled.img`
width: 250px;
height: 300px;
`;

export default function ProfileImage(props) {
    return (
        <div>
            <StyledProfileImage src="https://im0-tub-by.yandex.net/i?id=f29f9c06e0f9d7bc8ca4fb19da6bf838&n=13"/>
        </div>
    )
}
