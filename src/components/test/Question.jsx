import React, { useState } from "react";
import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import MyRadio from "../../util/MyRadio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  margin: 30px;
  padding: 30px;
  background: #7797f9;
  border-radius: 5px;
  :focus {
    border: 1px solid red;
  }
`;

export default function Question(props) {
  const [end,setEnd] = useState(false)
  const { test, currentQuestion} = props.test;

  const [value, setValue] = useState(test.questions[currentQuestion].answers[0]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const answerHandle = () => {
    if(test.questions.length!==(currentQuestion+1)){
    setValue(test.questions[currentQuestion].answers[0]);
    
    props.nextQuest();
    }
    else if(test.questions.length===(currentQuestion+1)){
      props.addAnswer(value);
      setEnd(true)
    }
  };
  return (
    <Wrapper>
      {test.title}
      <br />
      {test.questions[currentQuestion].question}
      <br />
      <RadioGroup
        defaultValue={test.questions}
        name="question"
        value={value}
        onChange={handleChange}
      >
        {test.questions[currentQuestion].answers.map(a => (
          <FormControlLabel value={`${a}`} control={<MyRadio />} label={a} />
        ))}
      </RadioGroup>

      <br />
      <Button variant="contained" disabled={end} color="primary" onClick={answerHandle}>Далее</Button>
    </Wrapper>
  );
}