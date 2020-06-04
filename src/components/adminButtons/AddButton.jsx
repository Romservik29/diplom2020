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
    const { onClose, selectedValue, open, data } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        alert("click")
        onClose(value);
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Удалить? Это действие нельзя отменить.</DialogTitle>
            <List>
                {data.map((item) => (
                    <ListItem button onClick={() => handleListItemClick(item)} key={item.id}>
                        <ListItemAvatar>
                            {item.illustrationUrl !== undefined
                                ? <img width="30px" height="30px" src={item.illustrationUrl} alt="Картинка"/>
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
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

const AddButton = (props) => {
    const [selectedValue, setSelectedValue] = React.useState(null);
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value);
        setTimeout(props.del)
    };
    return (
        <>
            <MyButton
                tip={props.tip}
                onClick={handleOpen}
            >
                <DeleteOutline />
            </MyButton>
            <SimpleDialog selectedValue={selectedValue} data={props.data} open={open} onClose={handleClose} />
        </>
    )
}
AddButton.propTypes = {
    addFunc: PropTypes.func.isRequired,
    addId: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default AddButton;