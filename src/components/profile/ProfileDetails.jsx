import React from 'react'
import styled from "styled-components";
import { TextField } from "@material-ui/core/";
import Button from '@material-ui/core/Button'

const StyledInput = styled(TextField)`
width: 300px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border: 1px solid #6b6f8c;
border-radius: 5px;
align-items: center;
padding: 10px;
`;


const EditProfileDetails = (props) => {
    return (
        <Wrapper>
            <StyledInput style={{ margin: '10px' }} label="Имя" variant="filled" />
            <StyledInput style={{ margin: '10px' }} label="Фамилия" variant="filled" />
            <StyledInput style={{ margin: '10px' }} label="Группа" variant="filled" />
            <StyledInput style={{ margin: '10px' }} label="Специальность" variant="filled" /><br /><br />
            <Button variant="contained">Изменить</Button>
        </Wrapper>
    )
}
const ProfileDetails = () => {

    return (
        <>
            <EditProfileDetails />
            {/*<div>
                <div>Город: Могилев</div>

                <div>Группа: 3ПОБШ</div>
                <div>
                    Специальность: Программное обеспечиние инфорсационных технологий
      </div>
                <div>Роль: Админ</div>
                <div>Контакты: vk , tel, twitter</div>
            </div>*/}
        </>
    )
}

export default ProfileDetails;
