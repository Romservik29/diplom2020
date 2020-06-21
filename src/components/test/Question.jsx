import React, { useState } from "react";
import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import MyRadio from "../../util/MyRadio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import TestProgress from "./TestProgress";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Downloading from "./Downloading"
import { Link } from "react-router-dom";
import TestResult from "./TestResult";

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  margin: 30px;
  padding: 30px;
  border-radius: 5px;
  font-family: "Parisienne", cursive,-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue", Arial,"Noto Sans",sans-serif,"Apple Color Emoji", "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  margin: auto;
`;

const Title = styled.div`
font-size: 32px;
font-weight: 400;
line-height: 40px;
color: #202124;
line-height: 135%;
max-width: 100%;
min-width: 0%;
`;


export default function Question(props) {
  const [open, setOpen] = React.useState(false);
  const [end, setEnd] = useState(false)
  const { test, currentQuestion, result } = props.test;
  const [value, setValue] = useState('');
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleChange = event => {
    setValue(event.target.value);
  };

  const answerHandle = () => {
    if (test.questions.length > (currentQuestion + 1)) {
      setValue(test.questions[currentQuestion].answers[0]);
      props.addAnswer(value);
      props.nextQuest();
    }
    else if (test.questions.length === (currentQuestion + 1)) {
      props.addAnswer(value);
      setEnd(true)
      props.getTestResult(props.test.answers, test.testId)
      handleClickOpen();
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Wrapper>
      {props.loading === false
        ? <>
          <Paper style={{ padding: "15px", margin: 'auto' }}>
            <Title>{test.title}</Title>
            <p>{test.questions[currentQuestion].question}</p>
          </Paper>
          <Paper style={{ padding: "20px 10px 20px 10px", margin: "10px 0px 10px 0px" }}>
            <RadioGroup
              defaultValue={test.questions}
              name="question"
              value={value}
              onChange={handleChange}
            >

              {test.questions[currentQuestion].answers.map(a => (
                <><FormControlLabel value={`${a}`} control={<MyRadio />} label={a} /><br /></>
              ))}
            </RadioGroup>
            <Button style={{ marginTop: '10px' }} variant="contained" disabled={end} color="primary" onClick={answerHandle}>Далее</Button>
          </Paper>
          <Paper>
            <TestProgress currentQuest={currentQuestion + 1} questCount={test.questions.length} />
          </Paper>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            width={'xl'}
            onClose={handleClose}
          >
            <DialogTitle id="alert-dialog-slide-title">{test.title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TestResult />
              </DialogContentText>
            </DialogContent>
            <DialogActions>

              <Button color="primary">
                Вернуться
          </Button>
              <Link to="/authors">
                <Button color="primary">
                  На главную
          </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </>
        : <Downloading />
      }
    </Wrapper>


  );
}