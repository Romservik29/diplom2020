import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle' 
import UploadPortret from './UploadPortret' 

const CardTop = styled.div`
padding: 20px;
text-align: center;
border: 1px inset ${props => props.theme.background};
font-size: 22px;  
`;

const AuthorImage = styled.img`
width: auto;
max-height: 300px; 
margin-right: 15px;
margin-bottom: 1em;
margin-top: 20px;
border-radius: 10px;
box-shadow: 0 0 5px 5px ${props=>props.theme.background};
 `;

const CardContent = styled.section`
font-family: -apple-system,
            BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",
            Arial,"Noto Sans",sans-serif,"Apple Color Emoji",
            "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    text-indent: 1.5em;
        &:first-letter{
            color:${props => props.theme.main};
            font-size: 2em;
        }
`;

const StyledUploadPortret = styled(UploadPortret)`
position: relative;
left: 10px;
`;

export default function Bio(props) { 
    return (
        <>
            <div>
                <CardTop>
                        
                    <AuthorImage src={props.portretUrl} alt={props.firstName}/>
                    <UploadPortret />
                    <h2 style={{lineHeight: '10px'}}>{props.lastName}</h2>
                    <h4 style={{lineHeight: '10px'}}>{`${props.firstName} ${props.midName}`}</h4>
                    <p style={{fontWeight: 'lighter'}}>{props.yearOfLife}</p>
                </CardTop>
                <SubTitle name="Биография" edit/>

            <CardContent>
                {props.bio}
           </CardContent>
           </div>

            
        </>
    )
}
