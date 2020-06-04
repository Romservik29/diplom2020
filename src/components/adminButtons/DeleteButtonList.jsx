import React, { useState } from 'react'
import PropTypes from 'prop-types';

// MUI Stuff
import MyButton from '../../util/MyButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
//MUI icons
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const SimpleDialog = (props) => {
    const { onClose, open, data , delFunc} = props;
    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value) => {
        delFunc(value)
        onClose();
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Удалить? Это действие нельзя отменить.</DialogTitle>
            <List>
                {data.map((item) => (
                    <ListItem button onClick={() => handleListItemClick(item.id)} key={item.index}>
                        <ListItemAvatar>
                            {item.illustrationUrl !== undefined
                                ? <img item width="30px" height="30px" src={item.illustrationUrl} alt="Картинка"/>
                                : <YouTubeIcon style={{color: 'red'}}/>}
                        </ListItemAvatar>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    delFunc: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};

const DeleteButtonList = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <>
            <MyButton
                tip="удалить"
                onClick={handleOpen}
            >
                <DeleteOutline />
            </MyButton>
            <SimpleDialog data={props.data} delFunc={props.delFunc} open={open} onClose={handleClose} />
        </>
    )
}
DeleteButtonList.propTypes = {
    delFunc: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default DeleteButtonList;