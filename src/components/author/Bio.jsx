import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle'
import { Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MyButton from '../../util/MyButton';

const CardTop = styled(Paper)`
padding: 20px;
text-align: center;
border: 1px inset ${props => props.theme.background};
font-size: 22px;  
`;

const AuthorImage = styled.img`
width: auto;
max-width: 40%;
min-height: 250px;
min-width: 250px;
max-height: 300px; 
margin-bottom: 1em;
margin-top: 20px;
border-radius: 10px;
box-shadow: 0 0 5px 5px ${props => props.theme.background};
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


export default function Bio(props) {
    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        formData.append('authorId',props.authorId)
        props.uploadPortret(formData,props.authorId);
    };
    const uploadImage = props.authenticated === true
        ? <MyButton
            tip="Изменить портрет"
            onClick={handleEditPicture}
            btnClassName="button"
        >
            <EditIcon color="primary" />
        </MyButton>
        : null


    return (
        <>
            <div>
                <CardTop square>
                    <div className="image-wrapper">
                        <AuthorImage src={props.portretUrl} alt={props.firstName} />
                        <input
                            type="file"
                            id="imageInput"
                            hidden="hidden"
                            onChange={handleImageChange}
                        />
                        {uploadImage}
                    </div>
                    <h2 style={{ lineHeight: '10px' }}>{props.lastName}</h2>
                    <h4 style={{ lineHeight: '10px' }}>{`${props.firstName} ${props.midName}`}</h4>
                    <p style={{ fontWeight: 'lighter' }}>{props.yearOfLife}</p>
                </CardTop>
                <SubTitle name="Биография" edit tip="Изменить биографию"/>

                <CardContent>
                    {props.bio}
                </CardContent>
            </div>


        </>
    )
}
