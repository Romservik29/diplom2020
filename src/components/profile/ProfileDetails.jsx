import React from 'react'
import styled from "styled-components";
import { TextField } from "@material-ui/core/";
import Button from '@material-ui/core/Button'

const StyledInput = styled(TextField)`

`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border-left: 1px solid #6b6f8c;

justify-content: center;
    h1{
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
    button{
        margin: 10px;
        max-width: 120px;
    }
`;

const Data = styled.div`
    font-size: 1.25em;
`;

const EditProfileDetails = (props) => {
    return (
        <>
            <StyledInput label="Имя" variant="filled" />
            <StyledInput label="Фамилия" variant="filled" />
            <StyledInput label="Группа" variant="filled" />
            <StyledInput label="Город" variant="filled" />
           
            <Button onClick={props.changeProfileDetails} variant="contained">Изменить</Button>
        </>
    )
}


const ProfileDetails = () => {

    const [isEdit, setIsEdit] = React.useState(false)
    const changeProfileDetails = (profile) => {
        setIsEdit(false);
    }
    const openEditMode = () => {
        setIsEdit(true)
    }
    return (
        <Wrapper>
          <h1>Романовский Андрей</h1>
            {isEdit === true
                ? <EditProfileDetails changeProfileDetails={changeProfileDetails} />
                : <div style={{padding: '10px'}}>
                    <Data>Город: Могилев</Data>
                    <Data>Группа: 3ПОБШ</Data>
                    <Data>Роль: Админ</Data>
                    <Button onClick={openEditMode} variant="contained"> Изменить</Button>
                </div>
            }
        </Wrapper>
    )
}

export default ProfileDetails;
