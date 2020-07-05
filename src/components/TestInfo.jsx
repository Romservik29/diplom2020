import React from 'react'
import styled from 'styled-components'
import DeleteButtonModal from '../components/admin/DeleteButtonModal';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MyButton from '../util/MyButton'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ReceiptIcon from '@material-ui/icons/Receipt';

const Root = styled.div`
display: flex;
align-items: center;
font-family: Parisienne, cursive,
-apple-system, BlinkMacSystemFont,
 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
  'Cantarell', 'Fira Sans', 'Droid Sans', 
  'Helvetica Neue', sans-serif;;
border-bottom: 3px dotted #48b9f0;
max-width: 1000;
width: 100%;
justify-content: space-between;
&:hover{
    background-color: #ddeef6;
}
&:last-child{
    border-bottom: none;
}
`;

const Name = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

export default function TestInfo(props) {
    const title = "Вы действительно хотите удалить тест?" 
    return (
        <Root>
                    <Name>
                        <div style={{display: 'flex', paddingLeft: '10px'}}>
                            <div><ReceiptIcon style={{color:'#48b9f0'}}/> </div> 
                            <div>{props.name} | {props.questionsCount}</div>
                        </div>
                        <div>
                            {props.authenticated === true
                                ? <Link to={`/test/${props.testId}`}>
                                    <MyButton tip="Пройти тест">
                                        <PlayArrowIcon color='primary' />
                                    </MyButton>
                                </Link>
                                : <Link to="/login">
                                    <IconButton>
                                        <PlayArrowIcon color='primary' />
                                    </IconButton>
                                </Link>
                            }
                            {props.role === 'admin'
                                &&
                                <DeleteButtonModal deleteFunc={props.delTest} deleteId={props.testId} title={title} tip="Удалить тест" />
                            }
                        </div>
                    </Name>  
        </Root>
    )
}
