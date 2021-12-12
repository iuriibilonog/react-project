import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
  max-width: 300px;
  height: 37px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  border: 2px solid #f5f6fb;
  border-radius: 16px 0px 0px 0px;
  padding: 6px 10px;
  color: #20262d;
  margin: 0;
  transition: width 300ms ease;
  position: relative;

  @media screen and (min-width: 320px) and (max-width: 767.5px) {
    width: 283px;
    height: 34px;
    background: #f5f6fb;
    border: 2px solid #ffffff;
    border-bottom: none;
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    background: inherit;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledInputElement;
