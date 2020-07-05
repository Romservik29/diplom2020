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
import TextField from '@material-ui/core/TextField';
import Downloading from "./Downloading"
import { Link } from "react-router-dom";
import TestResult from "./TestResult";
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from './Checkbox'

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  margin: 30px;
  padding: 30px;
  border-radius: 5px;
  font-family: "Parisienne", cursive,
  -apple-system, BlinkMacSystemFont,
  "Segoe UI",Roboto,"Helvetica Neue", Arial,
  "Noto Sans",sans-serif,"Apple Color Emoji",
   "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false)

  const [value, setValue] = useState('');
  const [answers, setAnswers] = useState([])
  const { test, currentQuestion } = props.test;
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleChange = event => {
    setValue(event.target.value);
  };
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const answerHandle = () => {
    if (test.questions.length > (currentQuestion + 1)) {
      setValue(test.questions[currentQuestion].answers[0]);
      props.addAnswer(value);
      setAnswers([...answers, value]);
      setValue('');
      props.nextQuest();
    }
    else if (test.questions.length === (currentQuestion + 1)) {
      props.addAnswer(value);
      setAnswers([...answers, value])
      setEnd(true)
      props.getTestResult(answers, props.test.testId)
      handleClickOpen();
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChecked = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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

              {test.questions[currentQuestion].type === "radio" && test.questions[currentQuestion].answers.map(a => (
                <><FormControlLabel value={`${a}`} control={<MyRadio />} label={a} /><br /></>
              ))}
            
            {test.questions[currentQuestion].type === "text"
              && <><TextField placeholder="Ваш ответ..." onChange={(e) => { setValue(e.target.value) }} value={value} /></>
            }
            
            {test.questions[currentQuestion].type === "checked"&&
              <FormGroup column>
                <FormControlLabel control={<Checkbox name="checkedA" />} onChange={handleChecked} label={`${"Любовь одна — веселье жизни хладной..."}`} />
                <FormControlLabel control={<Checkbox name="checkedB" />} onChange={handleChecked} label={`${"Я вас любил: любовь еще, быть может..."}`} />
                <FormControlLabel control={<Checkbox name="checkedC" />} onChange={handleChecked} label="Колобок" />
                <FormControlLabel control={<Checkbox name="checkedD" />} onChange={handleChecked} label="Зимнее утро" />
              </FormGroup>
            }
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
            <DialogTitle id="alert-dialog-slide-title">{test.title + " - ваша оценка: 7"}</DialogTitle>
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