import React, { useState } from 'react'
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


export type Data = {
    id: string
    movieId?: string
    illustrationUrl?: string
    name:string,
    index: number
}

type SimpleDialogProps ={
    onClose: ()=>void
    delFunc: (id:string)=>void
    open: boolean
    data: Data[]
}

type DeleteButtonListProps ={
    delFunc: (id:string)=>void
    data: Data[]
}


const SimpleDialog = (props:SimpleDialogProps) => {
    const { onClose, open, data , delFunc} = props;
    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value:string) => {
        delFunc(value)
        onClose();
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Удалить? Это действие нельзя отменить.</DialogTitle>
            <List>
                {data.map((item:Data) => (
                    <ListItem button onClick={() => handleListItemClick(item.id)} key={item.index}>
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

const DeleteButtonList = (props:DeleteButtonListProps) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <>
            <MyButton tip="удалить" onClick={handleOpen}>
                <DeleteOutline style={{color: 'red'}}/>
            </MyButton>
            <SimpleDialog data={props.data} delFunc={props.delFunc} open={open} onClose={handleClose} />
        </>
    )
}

export default DeleteButtonList;