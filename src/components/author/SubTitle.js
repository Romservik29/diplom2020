import styled from 'styled-components';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploadForm from '../forms/UploadForm';

export default function SubTitle(props) {

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
    const StyledAdd = styled(AddCircleOutlineIcon)`
color: #9AF538;
`;
    const StyledEdit = styled(EditIcon)`
color: #9AF538;
`;

    const StyledIcButton = styled(IconButton)`
padding: 6px;
`;
    const Name = styled.div`
font-size: 1.5em;
padding-left: 1em;
font-weight: bold;
`;
const StyledTextField = styled(TextField)`
width: 1000px;
`;

    const [openAdd, setOpenAdd] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    
    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    return (
        <Background>
            <Name align='left'>{props.name}</Name>
            <div style={{ paddingRight: '6px' }}>
                {props.add &&
                    <StyledIcButton>
                        <StyledAdd onClick={handleClickOpenAdd} />
                        <Dialog fullWidth open={openAdd} onClose={handleCloseAdd} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Добавить {props.formTitle}</DialogTitle>
                            <DialogContent>
                                
                                    <UploadForm/>
                                
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseAdd} color="primary">
                                    Отменить
                                </Button>
                                <Button onClick={handleCloseAdd} color="primary">
                                    Добавить
                            </Button>
                            </DialogActions>
                            </Dialog>
                    </StyledIcButton>
                }
                {props.edit &&
                            <StyledIcButton>
                                <StyledEdit color='primary' onClick={handleClickOpenEdit}/>
                                <Dialog maxWidth={false} open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Изменить {props.formTitle}</DialogTitle>
                            <DialogContent>
                            <StyledTextField
                                id="outlined-multiline-static"
                                multiline
                                autoFocus={true}                                
                                variant="outlined"
                                rows={25}
                                fullWidth
                                />                               
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseEdit} color="primary">
                                    Отменить
                                </Button>
                                <Button onClick={handleCloseEdit} color="primary">
                                    Изменить
                            </Button>
                            </DialogActions>
                            </Dialog>
                            </StyledIcButton>

                        }
            </div>

        </Background>
    )
}
