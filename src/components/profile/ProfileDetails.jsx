import React from 'react'
import styled from "styled-components";
import { TextField } from "@material-ui/core/";
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik';
import FormGroup from '@material-ui/core/FormGroup';



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

    const submit = (values) => {
        const userData = {
            name: values.name,
            lastName: values.lastName,
            group: values.group,
            city: values.city
        }
        props.changeProfileData(userData)
        props.changeProfileDetails()
    }
    const formik = useFormik({
        initialValues: {
            name: props.name,
            lastName: props.secondName,
            group: props.group,
            city: props.city,
        },
        onSubmit: values => {
            submit(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup column>
                <TextField id="name" label="Имя" variant="filled" onChange={formik.handleChange} value={formik.values.name} />
                <TextField id="lastName" label="Фамилия" variant="filled" onChange={formik.handleChange} value={formik.values.lastName} />
                <TextField id="group" label="Группа" variant="filled" onChange={formik.handleChange} value={formik.values.group} />
                <TextField id="city" label="Город" variant="filled" onChange={formik.handleChange} value={formik.values.city} />
            </FormGroup>
            <Button type="submit" variant="contained">Изменить</Button>
        </form>
    )
}


const ProfileDetails = (props) => {

    const [isEdit, setIsEdit] = React.useState(false)
    const changeProfileDetails = (profile) => {
        setIsEdit(false);
    }
    const openEditMode = () => {
        setIsEdit(true)
    }
    return (
        <Wrapper>
            <h1>{props.name} {props.secondName}</h1>
            {isEdit === true
                ? <EditProfileDetails {...props} changeProfileData={props.changeProfileData} changeProfileDetails={changeProfileDetails} />
                : <div style={{ padding: '10px' }}>
                    <Data>Город: {props.city}</Data>
                    <Data>Группа: {props.group}</Data>
                    <Data>Роль:
                        {props.role === 'admin'
                            ? 'Администратор'
                            : 'Пользователь'}
                    </Data>
                    <Button onClick={openEditMode} variant="contained"> Изменить</Button>
                </div>
            }
        </Wrapper>
    )
}

export default ProfileDetails;
