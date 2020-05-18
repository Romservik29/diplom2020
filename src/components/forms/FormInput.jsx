import styled from 'styled-components'
import {Field } from 'formik';
export default styled(Field)`
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid #e2e8f0;
    background-color: #bee3f8;
    color: #2d3748;
    width: 100%;
    border-radius: 10px;
    :focus{
      outline: none;
      border-color: #4299e1;
    }
`;