import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import expenceJson from '../../../data/expenselcon.json';
import incomesJson from '../../../data/expenselcon.json';
import { MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';

const StyledInputElement = styled('input')`
  max-width: 300px;
  height: 37px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  border: 2px solid #f5f6fb;
  border-radius: 16px 0px 0px 0px;
  padding: 6px 10px;
  color: #20262d;
  margin: 0;
  transition: width 300ms ease;

  position: relative;

  &:hover {
  }

  &:focus {
    outline: none;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref}></InputUnstyled>
  );
});
export default CustomInput;
