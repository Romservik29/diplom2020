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
import DonutChart from 'react-donut-chart';

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  margin: 30px;
  padding: 30px;
  border-radius: 5px;
  font-family: "Parisienne", cursive;
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
  const { test, currentQuestion } = props.test;
  const [value, setValue] = useState(test.questions[currentQuestion].answers[0]);
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
      handleClickOpen();
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const data = [{
    value: 4,
    label: 'Верных ответов'
  },
  {
    value: 1,
    label: 'Не верных ответов'
  }]
  return (
    <Wrapper>
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
        <Button style={{marginTop: '10px'}} variant="contained" disabled={end} color="primary" onClick={answerHandle}>Далее</Button>
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
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{test.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <DonutChart
            height={300}
            width={300}
            data={data}
            legend={false}
            innerRadius={0.53}
            outerRadius={0.60}
            colors={['#174578','#ab0c0f']}
            selectedOffset={0.00}
            emptyOffset={0}
            toggledOffset={0}
            startAngle={30}
            />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Вернуться
          </Button>
          <Button onClick={handleClose} color="primary">
            На главную
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}